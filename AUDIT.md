# Behavioral Audit: StreamDemo Pricing Decision Architecture
**Course:** MGMT 6108 – Leaders as Decision Architects  
**Institution:** Singapore Management University (SMU)  
**Product Audited:** Viu Singapore Premium (modeled under fictional brand **"StreamDemo Pricing"** to prevent trademark/copyright infringement)  
**Audit Date:** October 2026  
**Project Group Members & Contacts:**  
- **Lead / Primary Contact:** Akshita Kumar (`akshita.k.2025@mm.smu.edu.sg`)  
- **Secondary Contact Emails:**  
  - Lin Xinyu (`xinyu.lin.2025@mm.smu.edu.sg`)  
  - Vajeeha Farhath Mohamed Jameel (`vajeehaf.mj.2025@mm.smu.edu.sg`)  
  - Yaanipha Vetvitoon (`y.vetvitoon.2025@mm.smu.edu.sg`)  

---

## 1. Product & The Decision Point

### Product Context
Viu is a leading pan-Asian Over-The-Top (OTT) video streaming platform operated by PCCW Media, offering premium Asian dramas (K-Dramas, C-Dramas, Thai series), variety shows, and Japanese anime. It operates on a freemium model combining ad-supported free streaming with "Viu Premium" subscription tiers. To prevent copyright infringement, our research prototype is titled **StreamDemo Pricing** (`https://www.viu.com/ott/sg/en/premium`).

### The Decision Point Audited
We audit the **StreamDemo Pricing Plans Page** (`/premium`), where consumers decide whether to start a 7-day free trial, which recurring plan duration to purchase (30 Days at $10.98/mo, 90 Days at $9.98/mo [$29.94], 365 Days at $8.98/mo [$107.76], or Entertainment Bundles), and whether to authorize automatic renewal.

- **Whose Decision:** Consumers evaluating streaming subscriptions against household entertainment budgets.
- **The Stakes:** Recurring monetary deductions ($10.98 to $107.76 SGD per billing cycle), cognitive vigilance to cancel before trial expiration, and exposure to hidden foreign transaction charges.

---

## 2. The Behavioral Audit Findings Table

| # | Where (Screen & Element) | What User Sees & Does | Principle & Academic Citation | Mechanism & Whose Goal Wins | Severity (1–4) & Driver | Repair (Variant B Change) |
|---|--------------------------|----------------------|--------------------------------|-----------------------------|-------------------------|---------------------------|
| **F-01** | Pricing Plans Landing: Plan Duration Default | The 365-Day Annual Plan ($107.76) is automatically selected upon landing with a vibrant magenta `Recommended` badge; shorter 30-day and 90-day plans are obscured under separate sub-tabs. | **Default Effect & Status Quo Bias** (Thaler & Sunstein, 2008; Johnson & Goldstein, 2003) | **Implicit Recommendation & Inertia:** Consumers disproportionately stick with whichever tier is presented as the default, assuming it is universally optimal. **Firm wins** higher upfront annual cash inflow ($107.76); **User loses** flexibility. | **Severity 3** (12-month lock-in commitment) | **Active Choice Architecture:** Present 30-day ($10.98), 90-day ($29.94), and 365-day ($107.76) plans side-by-side on an equal visual plane, requiring active consumer selection without biased pre-selection. |
| **F-02** | Plan Headline Hierarchy: Price Framing | Large 32pt bold headline proclaims: `"Only $8.98/month"` and `"Save 18% on 1 year!"`, while the actual lump-sum charge of `$107.76` is buried in 11pt light grey fine print below. | **Anchoring & Framing Heuristics** (Tversky & Kahneman, 1974; Kahneman, 2011) | **Cognitive Narrowing:** The salient single-digit anchor ($8.98) registers in System 1, anchoring perceived affordability and suppressing awareness of the triple-digit ($107.76) upfront credit card debit. **Firm wins** higher conversion; **User loses** accurate budget forecasting. | **Severity 3** (Financial cognitive distortion) | **Dual-Price Salience:** Display both total renewal price (`$107.76 / year`) and unit cost (`$8.98 / mo equivalent`) in equal typography and visual hierarchy. |
| **F-03** | Trial Terms: The 24-Hour Forfeiture Trap | Notice states: *"You won't be charged during your free trial... please cancel at least 24 hours before your free trial ends to avoid being charged $107.76. Otherwise, $107.76 will be charged automatically"*. No reminder notification is promised. | **Present Bias & Inattention Sludge** (Laibson, 1997; Sunstein, 2019; O'Donoghue & Rabin, 1999) | **Hyperbolic Discounting:** Users focus on the immediate $0.00 trial benefit today and heavily discount future costs, overestimating their memory to cancel on Day 6. **Firm wins** accidental rollover billing; **User loses** money without deliberate intent. | **Severity 4** (Deceptive trial sludge causing customer disputes) | **Trial Protection Guarantee:** Schedule an automated SMS & Email notification sent on **Day 5** (48 hours before trial expiration) containing a direct 1-click cancellation link with zero penalties. |
| **F-04** | Fine Print: Unsalient International Surcharge | Fine print at bottom discloses: *"As merchant account is maintained overseas, your bank may impose an international transaction fee... not responsible for any such fees"*. | **Shrouded Attributes & Hidden Friction** (Gabaix & Laibson, 2006; Heidhues et al., 2016) | **Information Shrouding:** Hides the true full transaction cost until the bank statement arrives days later. **Firm wins** lower tax/merchant overhead; **User loses** unadvertised 1.5% to 3.5% foreign exchange surcharge. | **Severity 3** (Unannounced surcharge on Singapore consumers) | **Local Transparent Billing:** Guarantee local Singapore SGD processing with zero international transaction fees, explicitly noting 9% Singapore GST inclusive. |
| **F-05** | Cancellation Policy: Asymmetric Exit Friction | Policy states: *"No refunds will be provided for any partial or unused portion of the Plan if you cancel during an active subscription period"*, paired with an multi-step settings exit survey. | **Asymmetric Friction & Roach Motel Sludge** (Luguri & Strahilevitz, 2021; Sunstein, 2021) | **Sludge Asymmetry:** Initiating the subscription takes 1 click; canceling requires navigating through settings hurdles, survey traps, and immediate forfeiture warnings. **Firm wins** involuntary retention; **User loses** autonomy. | **Severity 3** (Consumer trap & high exit cost) | **Symmetric Friction:** Direct 1-click self-serve cancel button available in member profile with clear confirmation that access persists through the end of the paid term. |
| **F-06** *(Existing Good Nudge Kept)* | Bottom Feature Strip: Visual Benefit Badges | Standardized horizontal strip featuring 6 icons: `Unlimited Access`, `No Video Ads`, `Video Downloads`, `Full HD (1080p)`, `Priority Viewing`, `Watch On Multiple Screens`. | **Visual Information Salience & Cognitive Ease** (Kahneman, 2011) | **Comprehension Aid:** Standardized visual iconography reduces text reading fatigue, helping consumers accurately assess what features they are paying for. **Both win:** Consumer understands tier benefits; Firm reduces customer support inquiries. | **Good Nudge (Kept in B)** | Retained in Variant B with enhanced high-contrast visual fidelity. |

---

## 3. Redesign: Variant A vs Variant B Side-by-Side

| Dimension | Variant A (Original Viu Status Quo Baseline) | Variant B (StreamDemo Decision Architecture Redesign) | Behavioral Science Rationale |
|---|---|---|---|
| **Landing Plan Default** | Pre-selects 365-Day Annual Plan ($107.76) with magenta `Recommended` ribbon. | Neutral Active Choice displaying 30d ($10.98), 90d ($29.94), and 365d ($107.76) side-by-side. | Prevents default bias exploitation; fosters deliberate autonomous consumer commitment. |
| **Price Salience** | Anchors on `$8.98/month` in huge font; obscures `$107.76` lump sum in fine print. | Dual-Price Salience: Displays `$107.76 / year (Billed Annually = $8.98/mo)` with equal visual weight. | Eliminates cognitive anchoring distortion; complies with Singapore fair trading guidelines. |
| **Trial Renewal Transparency** | Punitive warning: *"Cancel 24 hours prior or get charged $107.76 automatically"*. Zero reminder sent. | **Trial Protection Guarantee:** Automated SMS & Email reminder sent on Day 5 with a direct 1-click cancellation button. | Counteracts present bias and forgetfulness; establishes ethical trust. |
| **Fee Disclosure** | Shrouded overseas transaction fee notice hidden in footer disclaimer. | Transparent Local SGD processing guarantee (Zero foreign transaction charges, GST included). | Eliminates shrouded attributes and surprise bank surcharges. |
| **Cancellation Architecture** | Roach motel multi-step exit questionnaire and forfeiture friction. | Symmetric 1-click self-serve cancellation with service active until cycle completion. | Lowers perceived purchase risk and increases long-term customer lifetime value (LTV). |

---

## 4. Empirical Predictions & Field Test Plan

### Hypothesis
- **H1 (Comprehension):** Consumers in Variant B will demonstrate significantly higher comprehension of their renewal date and total billing amount compared to Variant A ($p < 0.001$).
- **H2 (Post-Trial Regret):** Involuntary renewals and customer support chargeback disputes will decrease by $\ge 40\%$ in Variant B due to the Day 5 Trial Protection reminder.
- **H3 (Conversion Quality):** While Variant A may yield slightly higher initial accidental conversions, Variant B will yield higher 90-day retention and net promoter scores (NPS).

### Statistical Power & Sample Size Calculation
- **Metric:** Renewal Decision Comprehension Rate ($p_1 = 0.32$ in Variant A, expected $p_2 = 0.52$ in Variant B).
- **Parameters:** Two-tailed $\alpha = 0.05$, statistical power $1 - \beta = 0.80$.
- **Required Sample Size:** Using Cohen's $h \approx 0.41$, minimum $N = 188$ participants per arm ($N_{total} = 376$).
