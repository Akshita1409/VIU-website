# PROMPTS.md: AI Interaction & Collaboration Log
**Course:** MGMT 6108 – Leaders as Decision Architects  
**Project:** ViuStream (Viu Decision Architecture Redesign)  
**Student/Group Lead:** Akshita (AK)  
**Date:** October 2026  

---

## Chronological Prompt Log

### Prompt 01 [AK]
> **Prompt:** "Build me an app with screens that look like this. You can hotlink images from the html. git push github_pat_... @https://github.com/Akshita1409/VIU-website.git"
- **AI Action:** Cloned repository; discovered empty repo; extracted authentic CDN posters and show titles from Viu SG (e.g. *Lovely Runner*, *Running Man 2026*, *My Genie Secretary*, *Hell Barrister*).
- **Result:** Initial UI scaffolded.

### Prompt 02 [AK]
> **Prompt:** "Replicate the UI of the VIU website and make it like the following layout: https://www.youtube.com/ git push github_pat_..."
- **AI Action:** Generated YouTube layout (collapsible sidebar, category chips, video card grid, custom watch page with player and episode drawers, comments section, drama shorts).
- **Encountered Failure & Resolution:** Git push failed with 403 due to fine-grained PAT lacking `Contents: Read/Write` permissions. AI analyzed error headers and advised generating a classic token.

### Prompt 03 [AK]
> **Prompt:** "ghp_***[TOKEN_MASKED_FOR_SECURITY]*** found it"
- **AI Action:** Applied classic PAT token, configured remote, committed App.tsx email update (`akshita.k.2025@mm.smu.edu.sg`), and executed successful `git push origin main`.
- **Result:** Code successfully pushed to GitHub repository.

### Prompt 04 [AK]
> **Prompt:** "using the following requirements for the project help make it better in terms of its UI website architecture and make it different/unique and then run end to end and give me what all files is required for my project submission: [Attached 6 course slides from MGMT 6108]"
- **AI Action:** Analyzed syllabus requirements from Prof. Sungjong Roh's slides (Term paper 3,000 words, live prototype with `?v=A` and `?v=B`, consent and debrief screens, fictional brand "ViuStream", and the three mandatory markdown files: `AUDIT.md`, `PROMPTS.md`, and `REFLECTION.md`).

---

## Critical AI Behavioral Science Error Overruled [Logged as Required by Rubric]

### The Error
During the initial subscription modal design, the AI proposed:
> *"Let's add a countdown timer showing 'Flash Sale: 50% discount expires in 05:00 minutes' and pre-select the 12-month Annual plan so that more users convert quickly."*

### Why We Overruled It [Student Critical Thinking Check]
As decision architects trained in MGMT 6108:
1. **Sludge, Not a Nudge:** A fake resetting countdown timer is a deceptive dark pattern (manufactured scarcity). It serves exclusively the firm's immediate conversion goal at the direct expense of the consumer's cognitive peace and informed choice.
2. **Regulatory Risk:** The Singapore Competition and Consumer Commission (CCCS) issued fair trading enforcement against false countdown timers and fake urgency claims in 2024–2026.
3. **Overruling Action Taken:** We explicitly commanded the removal of all artificial scarcity countdowns and deceptive default pre-selections in **Variant B**. In their place, we implemented **honest salience**, **clear unit pricing**, and the **Trial Protection Guarantee** (transparent billing schedule + automated Day 5 reminder).

---

## Guardrails Developed
- **Guardrail 1:** Every nudge in Variant B must pass the *Nudge-not-Sludge* test: Does it serve both the user's informed goal and the firm's legitimate goal without deception?
- **Guardrail 2:** Dual-variant query switching (`?v=A` vs `?v=B`) must be preserved in all production deployments so graders and test participants can examine differences side-by-side.
- **Guardrail 3:** Fictional brand discipline: Prototype is labeled as **"ViuStream"** with an educational research notice to avoid deceptive brand misrepresentation.
