#!/bin/bash

# Required
# Param 1 = system key
# Param 2 = system secret
# Param 3 = device name
# Param 4 = device active key

nohup ./edge-manager-adapter-amd64 -systemKey "$1" -systemSecret "$2" -deviceName "$3" -activeKey "$4" > edge-manager-adapter.log 2>&1 &

