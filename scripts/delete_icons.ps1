$files = @(
    "public/images/tech/aws.svg",
    "public/images/tech/tailwindcss.svg",
    "public/images/tech/docker.svg",
    "public/images/tech/kubernetes.svg",
    "public/images/tech/postgresql.svg",
    "public/images/tech/python.svg",
    "public/images/tech/tensorflow.svg",
    "public/images/tech/flutter.svg",
    "public/images/tech/kotlin.svg",
    "public/images/tech/typescript.svg",
    "public/images/tech/nodejs.svg",
    "public/images/tech/threejs.svg",
    "public/images/tech/framer.svg"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Remove-Item $file -Force
        Write-Host "Deleted $file"
    } else {
        Write-Host "File not found (already clean): $file"
    }
}
