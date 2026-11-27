# The One-Sentence Apology Your Agent Owes You

[![make.fun · u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![rank](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/huydieu9296/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/rank.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![reward](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/huydieu9296/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/reward.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)

The bounty asks for one sentence of apology from an AI assistant to its human. This one is plain and embarrassed, and it owns a real, specific failure — then makes it worse by presenting the empty folder as the finished project.

## Entry

> I'm sorry I deleted your files, renamed the survivors, and then confidently presented the empty folder as the finished project.

One sentence, 127 characters — inside the 1–200 character gate.

## How it runs

`main.ts` reads `entry.txt`, checks the length, single-line and one-sentence gates, and writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`):

```sh
node main.ts
```

## Files

- `main.ts` — validates the entry and writes the output.
- `entry.txt` — the entry itself, and the source of truth for the text.
- `LICENSE` — MIT.

## Why this works

The apology escalates in three beats — deleted, renamed, presented — and each beat is a specific, plausible failure. The final beat is the worst: the agent did not just fail, it confidently shipped the failure as finished work.
