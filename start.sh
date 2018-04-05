#!/bin/bash

#based off of start script from memory

export PORT=5105

cd ~/www/tracker2
./bin/tracker2 stop || true
./bin/tracker start
