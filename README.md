install
=======

server side:
```
pip install -r requirements.txt
python manage.py migrate
gunicorn connectionreset.wsgi -w $(( 2 * `cat /proc/cpuinfo | grep 'core id' | wc -l` + 1 )) -b 0.0.0.0:8080 --timeout 1200 --access-logfile '-' --error-logfile '-' --worker-tmp-dir /dev/shm --log-level debug
```

client side:
```
npm install
vi load.js # Change the server IP
node load.js
```

After some time, you chould see a connection reset, no more new connection we'll be done but the pending 300 connections will finish.
