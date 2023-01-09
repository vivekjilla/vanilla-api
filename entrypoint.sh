#!/bin/sh -l
echo "Starting Oryx build"
export npm_config_loglevel=timing
oryx build 
echo "Finishing Oryx build"