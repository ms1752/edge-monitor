#!/bin/bash
ps -ef | grep "edge-manager-adapter-amd64" | grep -v grep | awk '{print $2}' | xargs kill