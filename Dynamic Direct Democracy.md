

# Dynamic Direct Democracy

## Platform Overview
In our innovative dynamic voting system, we've reimagined the democratic process to enhance accessibility, transparency, and accountability. This cutting-edge platform allows individuals to engage in elections using their personal devices, streamlining the voting process. Upon initial registration, users' identities are verified using their social security number and/or driver's license, establishing a secure, one-time authentication process. Subsequently, they're automatically registered to vote, reducing bureaucratic hurdles and fostering broader civic participation.

But what truly sets our system apart is the concept of representation. Users can choose to designate 'representatives' from among their peers on the platform, entrusting them with their votes. To maintain this trust, representatives must adhere to their constituents' wishes, ensuring that users' voices are heard in the decision-making process. A user can reassign their vote in any election process while it's underway if their representative does not vote in accord with their interest, and may designate a new 'representative' at any time.

## Legislation
The dynamic voting system encourages active engagement in the legislative process. Anyone can propose ideas for new laws or changes to existing ones, promoting inclusivity. These proposals undergo community discussion and can be upvoted. Users play a pivotal role with upvotes by identifying and enhancing promising legislation for broader consideration.

### Levels of Political Hierarchy
The system is architected as a multi-tiered hierarchical structure, mirroring the layers of government, with legislation always starting at the municipal level. This approach ensures that laws are grounded in local needs while allowing for broader perspectives as they ascend the hierarchy.

The levels of the hierarchy are as follows:
| **Level**         | **Common Name**        | **Scope**                                |
|-------------------|------------------------|-------------------------------------------|
| 1. Local          | Municipal              | Neighborhood and city/town affairs        |
| 2. Regional-Local | County/District        | Services spanning multiple municipalities |
| 3. Mid-Level      | State/Province         | Large-scale infrastructure, education     |
| 4. Meta-Regional  | Regional (if applicable)| Inter-state/local coordination            |
| 5. National       | Federal/National       | Defense, diplomacy, constitutional matters|
 

In line with our commitment to transparency, all proposed legislation must be single-topic, easily understandable to high school-educated individuals. AI technology scans bills for unrelated riders, safeguarding against deception in legislative referendums. Additionally, our platform dynamically collates proposed legislation with existing laws in the same **topic area** for display, providing voters with comprehensive context and enabling informed decisions.
Hereforth, a layer of the political hierarchy will be referred to as a "**governance tier**."

### Legislative Cycle
Our legislative process is divided into six distinct phases, each serving a specific purpose and contributing to the evolution of high quality laws, policy and government services.

1.  **Proposal**: In this phase, legislation can be proposed and amended by participants. It's the initial stage where ideas are put forward and refined through collaborative efforts. It is at this point that user's can begin highlighting and commenting on the legislation.
    
2.  **Refinement**: Legislation in this phase undergoes further development. It can be reworded, elaborated upon, refined, or have sections removed, but amendments are not permitted at this stage. The focus is on improving the clarity and quality of proposed laws.
    
3.  **Vote**: Finalized legislation moves on to the voting phase. During this stage, participants cast their votes to determine the fate of proposed laws. 
    
4.  **Recycle | Ratify**: Depending on the outcome of the vote, proposals follow one of two paths. Those that are not approved can be recycled back into the legislative process, giving participants the opportunity to revise and resubmit them. Approved proposals are ratified and become part of the body of ratified legislation for the given **topic area**, shaping the rules and regulations.
    
5.  **Enactment**: Enacted legislation enters a dedicated application designed for individual taxpayers to allocate budget for the implementation. Here, taxpayers have the ability to allocate their taxes and coordinate the assignment of teams to implement the legislation effectively. This phase ensures that the laws passed are put into action with the necessary resources and coordination. The tax allocation and implementation app is outside the scope of this idea but will be forthcoming.
    
6.  **Retirement | Recycle**: Legislation that reaches its expiry date faces a decision point. It can either be recycled, allowing its implementors to re-enter the legislative process with updated proposals, or be retired. In the retirement phase, the legislation is archived, and the teams responsible for its implementation are disbanded. This process streamlines the legislative framework and maintains relevance over time.
    
These six phases ensure a well-structured and adaptable legislative process that promotes active engagement and continuous improvement within the operations of government.

#### Proposal
#####  Proposing Legislation Disclaimer
Within the legislation proposal section of the app, a disclaimer regarding the usage of this feature is prominently displayed to ensure transparency and accountability and must be signed before being granted post, or amend privileges. 
The Proposing Legislation Disclaimer asserts that individuals who propose legislation, as well as those who amend legislation, assume responsibility for implementing or facilitating the implementation of the proposed legislation, provided that the legislation is adequately funded in the Ratify and Enactment phases and provided that the proposers and amenders are able to coordinate or contract to successfully enact the legislation. This step ensures that proposers are aware of the implications of their proposals and are committed to seeing them through to implementation. This disclaimer serves as a critical component of the legislative process, emphasizing the importance of responsibility and accountability in shaping the laws of the community.

##### Text Input Interface
The text input interface will have a full markdown feature set for ease of drafting lightweight markup for legibility. There will also be traditional button based markup available. 

In the text input interface used to write and amend legislation there will be a number of support widgets to assist with the drafting process. These supporting widgets are as follows:
1. A word count
2. An estimated reading time
3. A Flesch-kincaid score
4. An AI auto-suggestion thesaurus

###### Word Count and Estimated Reading Time
A word count and estimated reading time will be provided such that the drafter can be be consistently aware of the amount of time it will take a reader to completely read and comprehend the legislation. Longer and more complex legislation may prevent readers from becoming prospective voters if they're unable to allocate the time necessary to understand the legislation sufficiently to pass [the Comprehension Quiz](#The Comprehension Quiz). Keep in mind that each vote must reach a statistical quorum set specific to the **governance tier** and proportional to the participants at that level.

###### A Flesch-kindcaid score & AI Auto suggestion thesaurus
The Flesch-kincaid score will be provided for the drafter to consider the reading level at which a prospective voter must be to understand the legislation. The threshold score is set at each **governance tier** by a **vote**. The AI auto-suggestion thesaurus can be used manually throughout the drafting process and will be tuned to provide output at or below the Flesch-kincaid threshold for that **governance tier**. When a sentence pushes the document over the threshold for that tier, the AI will automatically prompt with a simplified sentence that communicates the same concept.
 

#### Refinement 
During the refinement phase, no language may be added that would extend the proposal beyond the initial scope of the legislation determined at the outset of the Refinement phase. 
The legislation can be broken into sections, implementation plans can be elaborated, edge cases can be considered and accounted for. 
A special **Structured Text interface** mode may be activated by any user perusing a piece of legislation in the refinement phase.
This interface is derived from an algorithmic parsing of the legislation into structured chunks based on section, sentence, clause and word.  Each chunk may be:
- suggested upon
- commented upon
- voted up or down

Ultimately, only proposers or amenders are granted edit permissions to make changes to the legislation, but community feedback in these forms may be used to guide the modifications. 
During the refinement phase, readers are encouraged to highlight critical components of the legislation. These highlights are then used for [abuse prevention](#abuse prevention).

##### Popularity Voting
The overall piece of legislation can be voted up or down during the refinement period. A variable threshold between one and seven items of legislation for consideration per period may be set per **governance tier** that determines the number of top voted pieces of legislation that may enter the voting phase. This number can be brought to vote during any legislative cycle to be changed for the following cycle(s). 

#### Vote
During the vote phase, the top voted pieces of refined legislation are brought to vote. During this 2 week to month long time period, the legislation remains static. The **Structured Text Interface** mode is available during this phase with only commentary allowed from users. The commentary from the Refinement phase is archived to allow for a focused conversation on the version being voted on. Comment threads may be started on any piece of structured text or the legislation as a whole, facilitating lively debate that will determine whether the legislation fails or is ratified. 

#### Ratify / Recycle
Ratification of legislation is determined by the outcome of a voting phase with ratified legislation moving into the Dynamic Tax Allocation system while legislation that fails to pass the vote or does not make it into the voting round is immediately re-entered into the proposal phase, to be either abandoned or modified until the next round of voting on it's associated topic arrives. 
##### Ratification / Passing Criteria
Ratification of legislation is determined by the outcome of a voting phase that meets two criteria:
###### Star Voting
Voting is done via a [star voting system](https://www.starvoting.org/) in which candidate legislation is attributed stars on a Likert 1-5 scale. Winners are determined by the average number of stars exceeding a _passing threshold_.  Each voting domain can bring the _passing threshold_ to vote, wherein the threshold of the averaged star count a piece of legislation must achieve to pass is determined. The threshold is agreed upon at each **governance tier**. 
###### Quorum / Representative Sampling 
The ratification also requires a quorum of voters for the given population area over which the legislation will preside. Quorum is established using a statistical modeling power calculation which requires a critical value. 
$$n=\left(\dfrac{z_{\alpha/2}\sigma}{E}\right)^2$$

$n$ is the number of voters needed for quorum to make the vote valid.
$\sigma$ is the standard deviation of votes (along the 1-5 scale), and the margin of error $(E)$ is derived from the critical value $(\alpha)$. The critical value $(\alpha)$ is set by popular vote in a special cycle that can be initiated at most once per year.  Typical critical values are usually anywhere from $.01$ to $.1$. Higher levels of the political hierarchy might have lower critical values such that higher turnout and consensus are required at levels of the political hierarchy where greater numbers of citizens are effected by the outcome.

### Amending Enacted Legislation
- Within our dynamic voting system, the process of amending enacted legislation is designed to be open and flexible.
- Previous legislation, once enacted, can have amendments suggested at any time, allowing for continuous improvement and adaptation to changing needs.
- Proposing amendments to enacted legislation follows the six stage voting process akin to proposing new legislation. Users can draft an amendment post, which is structured similarly to a proposal post. However, it will always link to the enacted legislation that it seeks to modify.
- This link provides users with the ability to view both the original enacted legislation and how it would appear after the proposed amendment is applied. It offers transparency and clarity, ensuring that the community can assess the impact and implications of the suggested changes.
- This approach to amending enacted legislation encourages ongoing refinement and responsiveness to the evolving needs and perspectives of the community, promoting a dynamic and adaptable legal framework.

## Voting
The voting section of our platform is designed for intuitive navigation and efficient participation in the democratic process. It employs a nested tab structure with breadcrumbs and dynamic filtering for seamless exploration.

**Tab Structure:**

-   A top-level drop-down allows a user to move between different layers of government, providing access to counties, municipalities, states, regional, and federal levels.
-   Tabs across the top of the page offer the following choices:
- _Current Cycle_ for voting in the active election cycle on the active **topic areas** for that cycle, viewing and interacting with proposed legislation.
- _Upcoming Cycle_ for viewing, amending, and upvoting/downvoting  legislation proposed for other **topic areas** in future cycles.
- _My Representatives_ for reviewing the votes made by your elected representatives, and for changing your representatives per **topic area**.
- _My Legislation_ for viewing and interacting with pieces of legislation and amendments you've proposed.
-  _Historical_ for reviewing the outcome of past votes.

**Navigation:**

-   The primary means of navigation within the _Current_ and _Upcoming Cycle_ tabs are individual "legislation posts," offering extensive options for user interaction. Users can sort, filter, collapse, preview, and maximize these posts to access relevant details.
-   Iconography and abbreviated labels on each "legislation post" facilitate quick recognition of topic categories, ensuring efficient browsing.

**Filtering:**

-   The left sidebar houses a range of filtering options, enabling users to tailor their view. These filters include sorting by "Time Frame," focusing on "Favorite Categories" with a nested list of the user's preferred topics, accessing "Starred Legislation" for marking important bills, tracking "Representative's Votes" through nested checkboxes for each representative, filtering by "Topic Category," and viewing "Tags" extracted from the currently filtered view for additional context and categorization.

This thoughtful layout ensures that users can navigate, engage with, and make informed decisions on legislative matters with ease within the dynamic voting system.

### Abuse Prevention
#### Rationale
A problematic aspect of a pure democracy voting system is the potential for abuse. The spread of misinformation for manipulative purposes on the internet has been identified as a difficult issue to mitigate. It is very possible for people desiring to pass their legislation via whatever means possible to use polarizing and misleading rhetoric to encourage "viral voter turnout" in which they coerce their followers to vote blindly on a piece of legislation that they want to get passed, or that they want to prevent the passage of, without the voters actually knowing what they're voting on. 
In anticipation of these effects, we've created a system to mitigate the deleterious effects of viral phenomenon and misinformation on direct and open democracy.

#### The Comprehension Quiz
To vote on a piece of legislation, each person must do a **comprehension quiz** of randomized questions. The questions are drawn from a bank of questions & answers that is either a) generated by AI or b) user submitted, that the **key points** of a piece of legislation. A **key point** is a section of legislation with a total number of highlights above the mean number of highlights for any given section. A **key point** will be used to derive multiple AI generated iterations of question and answer pairs to populate the bank of possible questions displayed to users.  All question and answer pairs are approved by the proposers & amenders of the legislation, collectively the **legislation proposal team**. 
The **key points** are selected from all user's highlights retained in the final text of the legislation. An **importance score** is attributed to each question based on the aggregate number of highlights made to that section. The **importance score** will influence the frequency of its appearance in **comprehension quizzes**. The **importance score** will be algorithmically balanced by a randomization score to determine overall frequency of appearance. The randomization score is used to ensure the rotation of questions between **comprehension quiz** deliveries. The number of questions in a **comprehension quiz** will be proportional to the number of **key points** in the legislation. In order to vote on a piece of legislation, a voter must pass the **comprehension quiz** with a score above the threshold set for that **governance tier**. The best score from all **comprehension quiz** attempts will determine the proportion of a person's vote allocated to the legislation. For example, a person who scores 100% on the **comprehension quiz** will have their full vote counted in favor of the legislation. 


###  Timing of Cycles
In our dynamic voting system, the timing of voting is carefully structured to ensure fairness, participation, and to grant the ability for users to plan their participation. We implement a cyclic approach where political **topic areas** rotate in succession, each recurring at a set frequency. This deliberate scheduling allows participants to anticipate and plan their involvement in topics they care deeply about.

The voting process is complemented by a well-defined legislative timeline. Participants can propose legislation on any topic throughout the cycle; however, a month prior to a vote on a specific topic, no further legislation can be proposed for that particular topic in the upcoming vote.

The month leading window serves as an opportunity for platform participants to concentrate on refining and reviewing the legislation that will soon be up for a vote. It encourages thoughtful consideration and debate, ensuring that voters are well-informed about the issues at hand. Any new legislation proposed during this time is postponed to the subsequent cycle of that **topic area**, maintaining a structured and fair legislative process. 
Total characters and total reading time, instead of a 1-7 threshold of pieces of legislation can be used as an alternative means of limiting the number of legislative proposals entering the refinement and review period to ensure voters have sufficient time to review the proposals before it comes for a vote.

#### Revocation
Users may revoke their vote from any piece of legislation during the vote process at any point prior to the ratification decision at the conclusion of the vote period. 

#### Override
In emergency circumstances such as natural disaster, threat of war, etc it may be necessary to bring legislation to vote with more immediacy than the next cycle in which it's **topic area** would have come up for vote. A piece of legislation can be flagged as Urgent. If flagged as urgent by a quorum of people in the **governance tier**, it can be brought to vote in the current cycle, regardless of whether it matches the current **topic area**.

### Abstention

In our dynamic voting system, participants have the flexibility to abstain from any vote, whether it pertains to an individual piece of legislation, a specific **topic area**, a particular level of government, or for a predetermined period, even indefinitely. To streamline this process, abstention settings are strategically placed within the settings tabs for each **governance tier** and in each voting topic pane. This allows users to tailor their abstention preferences to specific levels of government or topics. All granular settings, spanning **topic area**s and layers of government, can be conveniently managed directly from their respective panes. Furthermore, these granular settings are aggregated into global abstention settings accessible from the global settings menu. This aggregated configuration is easily accessible through the user's profile settings menu, providing a centralized location for managing and customizing abstention preferences across the dynamic voting system.


## Representation
A **representative** can be any other user on the platform meeting the **Affinity Threshold** (see below for definition) who's opted in to being a representative, to which a user delegates their vote. The **representative**'s vote casts as many votes in an election as they have constituents (eg. other users who've allocated their vote to them).  Any user meeting the **Affinity Threshold** can delegate their vote to any representative at any time. If a user is absent and they have delegated their vote to a **representative** the **representative** s vote counts as their own plus the votes delegated to them as a **representative**. If a user becomes active after a period of absence and casts votes on a piece of legislation in an election cycle, the vote on that piece of legislation is automatically removed from their **representative's**' vote count, though they may still elect to have that person as their representative. 

### Newcomer Wizard Intro
For newcomers to our platform, we've designed an intuitive wizard introduction that simplifies the dynamic representative system. Upon joining, users are greeted by a step-by-step guide that explains how the dynamic voting system works. This introductory wizard aims to make their experience seamless and informative.

One key feature of this wizard is an **introductory questionnaire** reminiscent of popular platforms like [isidewith.com](https://www.isidewith.com/). This questionnaire covers a comprehensive spectrum of political topics, each followed by multiple-choice answers that are sorted by popularity. If a user's perspective isn't already represented, they can select "Other" and provide their own response through free-form text input. The platform leverages artificial intelligence to distill similar "Other"  answers into a coherent single response, which if recurrence frequency is high enough, is promoted to a new multiple choice entry.

Importantly, users have the freedom to answer as many or as few questions as they like, allowing for a flexible and personalized onboarding process. After completing the questionnaire, users will receive suggested legislation to participate in the refinement of, or vote on.
The final part of the wizard introduces the currently designated political **topic area** s and the time of year in which each **topic area** comes for a vote. A user can set granular notifications for each **topic area** to stay abreast of proposed legislation in the given **topic area**, or to be notified when a **topic area** enters a phase of the **legislative cycle**.

This introductory wizard not only simplifies the user experience but also empowers users to make informed choices and engage meaningfully with the dynamic representation system, enhancing their participation in the democratic process.


### Abuse Prevention
The allocation of votes to representatives is subject to abuse via influencer popularity. Anyone with a great deal of social media influence can potentially aggregate undue influence in elections if anyone can sign up for the system and allocate their vote to a representative immediately and never return to the app. 

#### Affinity Thresholds & Representative Unbinding
In order to mitigate the deleterious effect that the popularity contest effect of social media can have on democracy we've devised a system of affinity thresholds and periodic unbinding of representation. 
After completing the intro wizard the user will receive suggested legislation pertinent to their priority **topic areas** such that they can begin to engage in the democratic process. All activity in the app is tracked, from proposing, to commenting, and voting. Each layer of the
hierarchy will set it's custom **Affinity Threshold** which is a set of criteria a user must qualify for in order to allocate their vote to a representative. Possible criteria could be:

- Casting 40 votes on various pieces of legislation across 12 legislative cycles
- Suggesting amendments to 10 pieces of legislation of which 50% are ratified.
- Constituents voting records must be 85% aligned with a representative for that person to be able to choose that person as their representative

Once the **Affinity Threshold** criteria for that **governance tier** are met the user can then select a representative. 

The **Representative Unbinding** is a mechanism to ensure that user's representative selections continue to reflect their values as the representative votes. As a representative votes, all of their **constituents** receive notifications about the representative's vote and are offered a **vote approval**. A **vote approval** consists of:
 - a link to a summary of the legislation with key points
 - a binary question to the user as to whether they approve or disapprove of the representatives choice 
 - a short **comprehension quiz** over the key points of the legislation.
 

If a user disapproves of a representatives choice while a voting window is still active, the vote for that user is removed from the representative's voting points cast towards the legislation. If a user approves of a representatives choice, the vote will be recorded in the user's voting history.  All of the voting record of a person's representative is logged for the user to cast **vote approvals**. A user is encouraged to log in and periodically evaluate whether the representative continues to represent them faithfully by responding to the **vote approval** backlog. If the unanswered **vote approval** backlog exceeds 60% of the total votes cast by the representative on behalf of the constituent, the user's vote becomes unbound from the representative, for which a user receives a notification. Votes cast by that representative will no longer have the user's vote until the user answers at least 60% of the **vote approval** backlog. 

### Selecting a representative
A pane of the app will be entitled Representatives and will provide an interface for selecting Representatives for  **topic area** s.  When a user selects a representative they also select the **topic area** s for which the representative will represent the user's vote. In the representative selection pane, there will be a sorted table of other users who've opted to serve as representatives, ranked based on the percentage of alignment between their **voting history** and answers on the **Introductory Questionnaire** as well as a navigation system to drill down on the **representative profile,** or all of the representative's activity within the app. Any user meeting the **Affinity Threshold** may opt to be a representative for another user. 
Additionally, a data visualization shows the percentage of alignment between the entire **vote history** of the user and the representative across all **topic areas**.  With this information a user can identify **topic area** s that may not align with their suggested **representative** and find another **representative** for that **topic area** who better represents their values. 

In order to provide full transparency to users, every person that opts to act as a **representative** will have all of their **intro questionnaire** answers, their entire **voting history**, and their **legislative proposals**, **amendments**, and **active legislation** made public and searchable. This will allow users to continuously determine the representatives most aligned with their interests.




# Security
## Blockchain Voting

Blockchain technology stands as a cornerstone in fortifying the security and transparency of our dynamic voting system. By leveraging the decentralized nature of blockchain, we establish an unalterable ledger that captures and records all participant votes, ensuring the integrity of the democratic process.

**Key Features:**

1. **Immutability:** Each participant's certified actions, from proposing legislation to casting votes, is cryptographically sealed into a block. Once added to the blockchain, these blocks are linked in a way that makes altering any information within them practically impossible. This immutability safeguards the record of participant interactions, fostering trust and accountability.

2. **Decentralization:** Instead of relying on a central authority, our system utilizes a decentralized network of nodes to validate and record transactions. This ensures that no single entity has control over the entire system, reducing the risk of manipulation or fraud.

3. **Transparency:** The blockchain ledger is visible to all participants, allowing them to independently verify the accuracy of transactions. This transparency builds confidence in the legitimacy of the voting system and provides a comprehensive audit trail for every legislative proposal, amendment, and vote.

4. **Security Against Cyber Threats:** The cryptographic algorithms employed in blockchain technology enhance the security of participant data. The decentralized and distributed nature of the blockchain mitigates the risk of single points of failure, making it resilient against cyber threats.

5. **Secure Identity Verification:** Blockchain can facilitate secure identity verification during participant registration. A user's identifiable documents, such as SSN card, Passport, or Driver's License, once verified, and linked with facial recognition biometric data which is then tied to their unique cryptographic key, ensuring a secure and reliable authentication process and record of certified actions on the platform.

Incorporating blockchain into our dynamic voting system not only fortifies its security but also aligns with the principles of transparency, accountability, and trust that underpin a robust democratic process. This innovative integration ensures that every participant interaction is recorded and preserved, fostering a resilient and secure platform for democratic engagement.
<!--stackedit_data:
eyJkaXNjdXNzaW9ucyI6eyJXa2tCTWQzaW5aZmJPODhQIjp7In
RleHQiOiJzZXZlbiIsInN0YXJ0Ijo5NTMzLCJlbmQiOjk1Mzh9
LCI0TFA3V2pSZkVsWTZtSmdOIjp7InRleHQiOiJudW1iZXIgY2
FuIGJlIGJyb3VnaHQgdG8gdm90ZSBkdXJpbmcgYW55IGxlZ2lz
bGF0aXZlIGN5Y2xlIiwic3RhcnQiOjk3MjQsImVuZCI6OTc4Mn
0sIjRwMHpmQm51N2FLaG9rMGMiOnsidGV4dCI6ImZhaWxzIHRo
ZSB2b3Rpbmcgcm91bmQiLCJzdGFydCI6MTIxNjQsImVuZCI6MT
IxNjR9LCJ0RGhQc3F5c3Jpc0xtZTNXIjp7InRleHQiOiJmYWls
cyB0aGUgdm90aW5nIHJvdW5kIiwic3RhcnQiOjEwNjgwLCJlbm
QiOjEwNjgwfSwieVNnTHl4YWNYWmVCVDhDMCI6eyJzdGFydCI6
MjE1ODAsImVuZCI6MjE2MDIsInRleHQiOiIqKkFmZmluaXR5IF
RocmVzaG9sZCoqIn19LCJjb21tZW50cyI6eyJHMEVjVzVPZDQx
QTNUcmNMIjp7ImRpc2N1c3Npb25JZCI6Ildra0JNZDNpblpmYk
84OFAiLCJzdWIiOiJnbzoxMDEwMTI4NzgxMjU2NjgyMjQyMTQi
LCJ0ZXh0IjoiTWF5YmUgbW9yZSwgYnV0IEkgd291bGQgbm90IH
dhbnQgaGlnaGx5IGVuZ2FnZWQgdXNlcnMgYmVpbmcgYWJsZSB0
byBhYnVzZSB0aGUgc3lzdGVtIGJ5IHB1c2hpbmcgdGhyb3VnaC
Bsb3RzIG9mIGxlZ2lzbGF0aW9uIGR1cmluZyB0aW1lcyB3aGVu
IGZldyB1c2VycyBhcmUgYWJsZSB0byBlbmdhZ2UuIiwiY3JlYX
RlZCI6MTcwNDY2MDYwNzY0N30sImZYSU5aWW42dDM4bmpmUUQi
OnsiZGlzY3Vzc2lvbklkIjoiNExQN1dqUmZFbFk2bUpnTiIsIn
N1YiI6ImdvOjEwMTAxMjg3ODEyNTY2ODIyNDIxNCIsInRleHQi
OiJQb3NzaWJseSBhbHNvIGEgZmVhdHVyZSB0byBicmluZyB0by
B2b3RlIHNjaGVkdWxlZCBjaGFuZ2VzIG9mIHRoZSB0aHJlc2hv
bGQgYWNyb3NzIGEgc3BlY2lmaWMgdGltZSBzcGFuIGJhc2VkIG
9uIHRoZSBhdmFpbGFiaWxpdHkvZW5nYWdlbWVudCBvZiB0aGUg
cG9wdWxhY2UgZHVyaW5nIGRpZmZlcmVudCB0aW1lcyBvZiB5ZW
FyIGV0YyIsImNyZWF0ZWQiOjE3MDQ2NjA4NDI0OTF9LCJtV2w0
T0t2ckpaVXpZbGl5Ijp7ImRpc2N1c3Npb25JZCI6IjRwMHpmQm
51N2FLaG9rMGMiLCJzdWIiOiJnbzoxMDEwMTI4NzgxMjU2Njgy
MjQyMTQiLCJ0ZXh0IjoiU3VjY2VzcyAvIEZhaWx1cmUgd2lsbC
BuZWVkIHRvIHRha2UgaW50byBhY2NvdW50IHNvbWUgc3RhdGlz
dGljYWwgbW9kZWxpbmcgb2YgdGhlIHBhcnRpY2lwYXRpbmcgZW
xlY3RvcmF0ZSwgdGhlIHF1YW50aXR5IG9mIHZvdGVzIGNvdW50
ZWQsIG1lYXN1cmVkIGFnYWluc3QgYW4gYXZlcmFnZSBvZiByZW
NlbnQgdm90ZXMgY291bnRlZC4gRGV0ZXJtaW5pbmcgd2hhdCBw
YXNzZXMgYW5kIHdoYXQgZG9lc24ndCBiYXNlZCBvbiB0aGUgbn
VtYmVyIG9mIHZvdGVzIHdpdGhpbiBhIHZvdGluZyBib2R5IGlz
IGdvaW5nIHRvIGJlIGEgY3JpdGljYWwgYW5kIGNvbXBsZXggZm
VhdHVyZSB0byBzb3J0IG91dCIsImNyZWF0ZWQiOjE3MDQ2NjU1
MzIzODF9LCJjTDMzRmd5Y3hyVFdNckE1Ijp7ImRpc2N1c3Npb2
5JZCI6InREaFBzcXlzcmlzTG1lM1ciLCJzdWIiOiJnbzoxMDEw
MTI4NzgxMjU2NjgyMjQyMTQiLCJ0ZXh0IjoiU3VjY2VzcyAvIE
ZhaWx1cmUgd2lsbCBuZWVkIHRvIHRha2UgaW50byBhY2NvdW50
IHNvbWUgc3RhdGlzdGljYWwgbW9kZWxpbmcgb2YgdGhlIHBhcn
RpY2lwYXRpbmcgZWxlY3RvcmF0ZSwgdGhlIHF1YW50aXR5IG9m
IHZvdGVzIGNvdW50ZWQsIG1lYXN1cmVkIGFnYWluc3QgYW4gYX
ZlcmFnZSBvZiByZWNlbnQgdm90ZXMgY291bnRlZC4gRGV0ZXJt
aW5pbmcgd2hhdCBwYXNzZXMgYW5kIHdoYXQgZG9lc27igJl0IG
Jhc2VkIG9uIHRoZSBudW1iZXIgb2Ygdm90ZXMgd2l0aGluIGEg
dm90aW5nIGJvZHkgaXMgZ29pbmcgdG8gYmUgYSBjcml0aWNhbC
BhbmQgY29tcGxleCBmZWF0dXJlIHRvIHNvcnQgb3V0IiwiY3Jl
YXRlZCI6MTcwNDY2NTc1NzQ4NH0sIkZHQ3Z1ZExycDN4VFZSbH
giOnsiZGlzY3Vzc2lvbklkIjoieVNnTHl4YWNYWmVCVDhDMCIs
InN1YiI6ImdvOjEwMTAxMjg3ODEyNTY2ODIyNDIxNCIsInRleH
QiOiJBbmNob3IgbGluayB0aGlzIiwiY3JlYXRlZCI6MTc0NjEw
NDg0MjE5OH19LCJoaXN0b3J5IjpbMzkxOTQ2MzYzLC0xMDkyNz
g4NDAxLDE2ODkyMTE5MTAsMTgxNjAxNTc5Ml19
-->