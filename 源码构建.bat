
cd /d %~dp0

docker build -t victorybringer/javacompile .
docker run -it -p 80:80 victorybringer/javacompile


