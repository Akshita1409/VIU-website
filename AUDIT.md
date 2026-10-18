# Behavioral Audit: ViuStream Decision Architecture
**Course:** MGMT 6108 – Leaders as Decision Architects  
**Institution:** Singapore Management University (SMU)  
**Instructor:** Prof. Sungjong Roh, PhD  
**Product Audited:** Viu (modeled under fictional prototype brand **"ViuStream"**)  
**Audit Date:** October 2026  
**Auditors:** Group Project Team (Akshita & Team)  

---

## 1. Product & The Decision Point

### Product Context
Viu is a leading pan-Asian Over-The-Top (OTT) video streaming platform operated by PCCW Media, offering premium Asian dramas (K-Dramas, C-Dramas, Thai series), variety shows, and Japanese anime. It operates on a freemium model combining ad-supported free streaming with "Viu Premium" subscription tiers.

### The Decision Point Audited
We audit the **Viu VIP Subscription & Free Trial Paywall Screen**, encountered when users attempt to stream exclusive simulcast episodes (e.g., *Lovely Runner*, *Taxi Driver 2*), download episodes for offline viewing, or upgrade from ad-supported tiers.

- **Whose Decision:** The consumer choosing whether to start a 7-day trial / subscribe, which tier to pick (Monthly vs Annual), and whether to commit to recurring payments.
- **The Stakes:** Real financial stake (recurring SGD $7.98/mo or $69.98/yr auto-renewing), temporal commitment (binge consumption vs mindful media consumption), and cognitive privacy/transparency.

---

## 2. The Behavioral Audit Findings Table

| # | Where (Screen & Element) | What User Sees & Does | Principle & Academic Citation | Mechanism & Whose Goal Wins | Severity (1–4) & Driver | Repair (Variant B Change) |
|---|--------------------------|----------------------|--------------------------------|-----------------------------|-------------------------|---------------------------|
| **F-01** | Subscription Modal: Plan Selection Defaults | Annual 12-month tier ($69.98) is pre-selected by default with high-contrast badge; monthly option is visually subdued. User passively clicks "Proceed" without actively assessing commitment. | **Default Effect & Status Quo Bias** (Thaler & Sunstein, 2008; Johnson & Goldstein, 2003) | **Passive Acceptance:** Users disproportionately stick with the pre-selected option due to perceived implicit endorsement and cognitive laziness. **Firm wins** short-term cash flow; **User loses** flexibility. | **Severity 3** (Financial lock-in for 12 months) | **Active Choice Architecture:** Force neutral unselected state or balanced side-by-side comparison where user explicitly chooses their commitment level without biased pre-selection. |
| **F-02** | Top of Paywall Banner: Flashing Countdown Timer | "Special Promotion: 27% Off Ends in 04:59" with a ticking countdown timer that resets upon page reload. User rushes purchase fearing price increase. | **Artificial Scarcity & Heuristic Urgency / Sludge** (Cialdini, 2009; Sunstein, 2019; Thaler, 2018) | **Manufactured Panic:** Triggers fast System 1 loss aversion; prevents rational comparison of streaming habits against plan cost. **Firm wins** immediate checkout; **User loses** deliberate decision-making. | **Severity 4** (Pure Sludge / Deceptive Dark Pattern as flagged by Singapore CCCS guidelines) | **Honest Salience:** Remove resetting fake timer completely. Replace with authentic value proposition (clear per-month comparison: $5.83/mo vs $7.98/mo) without artificial time pressure. |
| **F-03** | Trial Opt-in Button & Fine Print | Button reads "Start 7-Day Free Trial", while the exact billing date, time of first deduction, and reminder policy are buried in 10pt low-contrast gray text. | **Salience & Present Bias / Opaque Sludge** (Laibson, 1997; O'Donoghue & Rabin, 1999; Sunstein, 2021) | **Hyperbolic Discounting:** Free present reward ($0 today) overshadows future delayed cost. Users underestimate probability of forgetting to cancel. **Firm wins** accidental renewal revenue; **User loses** unexpected charge. | **Severity 4** (Direct financial dispute, post-trial buyer remorse, chargebacks) | **Transparent Pre-Commitment & Trial Protection:** Prominently display: *"First charge of $7.98 on [Day 7 Date]. We will send an SMS & email reminder 2 days before with a 1-click cancel button."* |
| **F-04** | Cancellation Terms & Account Screen | No mention of how or where to cancel during onboarding; cancellation requires 4-step labyrinth navigation through account settings and retention confirmation screens. | **Asymmetric Friction / Roach Motel Sludge** (Thaler, 2018; Sunstein, 2019; Luguri & Strahilevitz, 2021) | **Sludge Friction:** Subscribing is 1 click (low friction); canceling has high behavioral and cognitive friction. **Firm wins** inertia retention; **User loses** autonomy and trust. | **Severity 3** (Frustration and erosion of brand equity) | **Symmetric Friction & Self-Efficacy Cue:** Clear "Cancel anytime in 1 click from your profile menu with zero penalties" badge directly adjacent to CTA. |
| **F-05** | Video Watch Player: Autoplay Next Episode | Next episode automatically plays after a 5-second countdown with no prompt on time spent or mindful breaks. | **Mindless Eating / Passive Default Consumption** (Wansink, 2006; Kahneman, 2011) | **Automaticity:** Frictionless autoplay exploits System 1 inertia, causing unintended multi-hour binge sessions that conflict with user's sleep/work goals. **Firm wins** vanity screen time; **User loses** well-being. | **Severity 2** (Temporal displacement / sleep hygiene) | **Mindful Decision Pause:** After 2 continuous episodes, display a mindful check-in: *"You've watched 2 episodes (2h 10m). Continue watching or bookmark for tomorrow?"* with equal visual weight. |
| **F-06** *(Existing Nudge Kept)* | Episode Quality & Subtitle Badges | Clear visual badges `[CC] EN ID ZH TH` and `1080p FHD` indicating content accessibility before video playback. | **Information Salience & Cognitive Ease** (Kahneman, 2011) | Reduces uncertainty and cognitive effort before clicking. **Both win:** User avoids buffering disappointment; Firm improves content discovery. | **Good Nudge (Kept in B)** | Retained in Variant B with enhanced clarity. |

---

## 3. Redesign: Variant A vs Variant B Side-by-Side

| Dimension | Variant A (Status Quo / Sludge) | Variant B (Decision-Architected Redesign) | Behavioral Science Rationale |
|---|---|---|---|
| **Paywall Default** | Pre-selects Annual 12-Month plan ($69.98) with "Best Deal" tag. | Unselected Active Choice or Honest Monthly Primary with clear per-unit calculations. | Removes default exploitation; ensures deliberate, uncoerced consumer intent. |
| **Urgency Signals** | Fake ticking countdown timer ("Offer expires in 04:59") that resets. | Transparent, static pricing with no artificial scarcity. | Eliminates dark pattern sludge; complies with Singapore Competition & Consumer Commission (CCCS) fair trading standards. |
| **Trial Safety** | Opaque auto-renewal buried in fine print; high risk of forgetting. | **Trial Protection Promise:** Explicit reminder schedule (SMS/Email on Day 5) and upfront date of first charge. | Mitigates present bias; builds institutional trust which increases long-term customer lifetime value (LTV). |
| **Cancellation Path** | Multi-step opaque settings maze. | Prominent "1-Click Self-Serve Cancel Anytime" assurance. | Psychological comfort lowers perceived purchase risk and increases trial initiation. |
| **Binge Autoplay** | 5-second auto-transition between episodes with zero friction. | Session awareness prompt after 2 consecutive episodes offering "Save for Tomorrow". | Empowers user autonomy; fosters guilt-free streaming habits rather than regretful bingeing. |

---

## 4. Empirical Predictions & Test Plan

### Experimental Design
- **Format:** Randomized Controlled Trial (A/B Test).
- **Allocation:** 50/50 split between Variant A (`?v=A`) and Variant B (`?v=B`).
- **Target Population:** New and free-tier streaming visitors on desktop and mobile web in Singapore.

### Metrics
1. **Primary Dependent Variable (User Goal):**
   - **Post-Trial Satisfaction & Non-Disputed Retention Rate (%):** Percentage of trial users who maintain their subscription past Day 30 without filing a cancellation dispute or refund request.
   - *Prediction:* Variant B will increase Day 30 retention satisfaction from **58% in Variant A to 74% in Variant B (+16 percentage points)**.
2. **Secondary Metric (Firm Goal):**
   - **Trial-to-Paid Conversion Rate (%):**
   - *Prediction:* Although Variant A may generate slight short-term accidental trial starts, Variant B's psychological safety and clear reminder promise will increase qualified trial starts by **+12%** and raise paid conversion from **34% to 46%**.
3. **Guardrail Metric:**
   - **Overall Subscription Revenue & Churn Rate:** Monthly Recurring Revenue (MRR) within 90 days must not decrease by more than 5%, while churn due to "I forgot to cancel" must drop by >60%.

### Statistical Power & Sample Size
- Using two-proportion z-test with $\alpha = 0.05$ (two-tailed) and power $1 - \beta = 0.80$:
- Baseline conversion $p_1 = 0.35$, expected $p_2 = 0.48$:
- **Required Sample Size:** Approximately **224 participants per arm** (total $N = 448$).
- Pilot study sample size: $N = 30$ peer participants for initial usability and comprehension testing.

### Ethics & Debrief
- **Informed Consent:** Participants are greeted with an ethical study disclosure informing them of the interface study, voluntary participation, and data privacy.
- **Debrief Screen:** After completing trial interaction, participants view a full debrief explaining the behavioral nudges tested and educational purpose under SMU MGMT 6108.
