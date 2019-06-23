#!/bin/sh -e

echo -n "<$0>"

while [ $# -gt 0 ]; do
	echo -n " [$1]"
	shift
done

echo
