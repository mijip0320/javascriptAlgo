#!/bin/sh

set -eu

STUDY_NOTE_DIR="/Users/mijipark/Library/CloudStorage/GoogleDrive-mijip0320@gmail.com/다른 컴퓨터/내 Mac/Study/Algorithms/Leetcode"
TODAY=$(TZ=Asia/Seoul date +%Y-%m-%d)

if [ ! -d "$STUDY_NOTE_DIR" ]; then
  echo "Google Drive 학습 기록 폴더를 찾을 수 없습니다:" >&2
  echo "$STUDY_NOTE_DIR" >&2
  exit 1
fi

found=0
for note in "$STUDY_NOTE_DIR"/"$TODAY"_*.md; do
  if [ ! -f "$note" ]; then
    continue
  fi

  found=1
done

if [ "$found" -eq 0 ]; then
  echo "Google Drive에 오늘($TODAY) 학습 기록이 없습니다." >&2
  echo "학습 기록을 먼저 만든 뒤 다시 push해 주세요." >&2
  exit 1
fi

echo "Google Drive에서 오늘($TODAY) 학습 기록을 확인했습니다."
