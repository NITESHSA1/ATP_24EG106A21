#!/bin/bash

echo "Starting MongoDB"
mongod --dbpath /usr/local/var/mongodb


echo "Starting Backend"
cd backend && node server.js &


echo "Starting Frontend"
cd ../frontend && npm run dev &

wait
