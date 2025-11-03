# Incident Report: Payment Commission Bug

## Bug Discovery
- Found using: git bisect start && git bisect bad HEAD && git bisect good HEAD~5
- Problematic commit: e44e3bb
- Author: Vladislav Chernyshev 2025-11-03 09:56:00 +0300

## Root Cause
The bug was introduced in the "Optimize commission calculation" commit where:
1. Commission calculation was changed to return rate instead of amount
2. Функция возвращала rate, а не сумму

## Fix Applied
- Reverted commit: 66d4211
- Fix commit: e44e3bb
- Verification: С помощью автотеста происходила проверка проблемной функции

## Stash Usage
- Stashed work: В stash хранилась новая фича для расчёта коммисии и аналитики
- Stash command used: git stash -u -m "WIP: Progressive commission feature"
- Recovery successful: Yes

## Reflog Recovery
- Lost commit: Потеряли новую фичу для расчёта коммисии и аналитики
- Recovery command: git reflog; git reset --hard HEAD@{1}
- Restored SHA: bd38f17

## Lessons Learned
Любая возникшая проблема в разработке не является чем-то грандиозным. Всё можно восстановить без лишних сложностей, главное помнить как: анализировать, искать и исправлять. Ну и относиться к разработке с холодной головой 
