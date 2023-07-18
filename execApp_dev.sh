#!/bin/zsh

tmux split-window -v

tmux select-pane -t 0

tmux send-keys -t 0 'npm start' C-m

tmux select-pane -t 1

tmux send-keys -t 1 'cd ../express-prisma-sample' C-m

tmux send-keys -t 1 'npm start' C-m