# 一键发布到 GitHub Pages（Windows PowerShell）
# 用法：  powershell -ExecutionPolicy Bypass -File deploy.ps1
# 可选：  powershell -ExecutionPolicy Bypass -File deploy.ps1 -RepoName my-resume

param(
    [string]$RepoName = "resume",
    [string]$Owner    = "ILearn-better",
    [string]$GH       = "F:\Program Files\GitHub CLI\gh.exe"
)

$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot

if (-not (Test-Path $GH)) {
    $GH = "gh"
}

Write-Host "==> 检查 gh 登录状态" -ForegroundColor Cyan
& $GH auth status
if ($LASTEXITCODE -ne 0) { throw "请先执行 gh auth login" }

Write-Host "==> 初始化 Git 仓库" -ForegroundColor Cyan
if (-not (Test-Path ".git")) {
    git init -b main | Out-Null
}
git add -A
git -c user.name="$Owner" -c user.email="$Owner@users.noreply.github.com" commit -m "feat: bilingual static resume" 2>$null

Write-Host "==> 创建/推送仓库 $Owner/$RepoName" -ForegroundColor Cyan
& $GH repo view "$Owner/$RepoName" 2>$null | Out-Null
if ($LASTEXITCODE -eq 0) {
    git remote remove origin 2>$null
    git remote add origin "https://github.com/$Owner/$RepoName.git"
    git push -u origin main --force
} else {
    & $GH repo create "$RepoName" --public --source=. --remote=origin --push
}

Write-Host "==> 开启 GitHub Pages" -ForegroundColor Cyan
$body = '{"source":{"branch":"main","path":"/"}}'
$tmp = New-TemporaryFile
$body | Out-File -FilePath $tmp -Encoding utf8 -NoNewline
try {
    & $GH api -X POST "repos/$Owner/$RepoName/pages" --input $tmp | Out-Null
} catch {
    & $GH api -X PUT "repos/$Owner/$RepoName/pages" --input $tmp | Out-Null
}
Remove-Item $tmp -Force

Write-Host ""
Write-Host "完成！地址： https://$($Owner.ToLower()).github.io/$RepoName/" -ForegroundColor Green
Write-Host "首次部署约 1-2 分钟后生效。" -ForegroundColor Green
