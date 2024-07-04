

# Dynamic Voting System

## Platform Overview
In our innovative dynamic voting system, we've reimagined the democratic process to enhance accessibility, transparency, and accountability. This cutting-edge platform allows individuals to engage in elections using their personal devices, streamlining the voting process. Upon initial registration, users' identities are verified using their social security number and/or driver's license, establishing a secure, one-time authentication process. Subsequently, they're automatically registered to vote, reducing bureaucratic hurdles and fostering broader civic participation.

But what truly sets our system apart is the concept of representation. Users can choose to designate 'representatives' from among their peers on the platform, entrusting them with their votes. To maintain this trust, representatives are bound to adhere to their constituents' wishes, ensuring that users' voices are heard in the decision-making process.

## Legislation
What's more, our dynamic voting system encourages active engagement in the legislative process. Anyone can propose ideas for new laws or changes to existing ones, promoting inclusivity. These proposals undergo community discussion and can be upvoted, and good representatives play a pivotal role by identifying and enhancing promising legislation for broader consideration.

We've also implemented a multi-tiered hierarchical structure, mirroring the layers of government, with legislation always starting at the municipal level. This approach ensures that laws are grounded in local needs while still allowing for broader perspectives as they ascend the hierarchy.

In line with our commitment to transparency, all proposed legislation must be single-topic, easily understandable to high school-educated individuals. AI technology scans bills for unrelated riders, safeguarding against deception in legislative referendums. Additionally, our platform dynamically collates proposed legislation with existing laws in the same **topic area**, providing voters with comprehensive context and enabling informed decisions.

### Legislative Cycle
Our legislative process is divided into six distinct phases, each serving a specific purpose and contributing to the evolution of high quality laws, policy and government services.

1.  **Proposal**: In this phase, legislation can be proposed and amended by participants. It's the initial stage where ideas are put forward and refined through collaborative efforts.
    
2.  **Refinement**: Legislation in this phase undergoes further development. It can be reworded, elaborated upon, refined, or have sections removed, but amendments are not permitted at this stage. The focus is on improving the clarity and quality of proposed laws.
    
3.  **Vote**: Finalized legislation moves on to the voting phase. During this stage, participants cast their votes to determine the fate of proposed laws. 
    
4.  **Recycle | Ratify**: Depending on the outcome of the vote, proposals follow one of two paths. Those that are not approved can be recycled back into the legislative process, giving participants the opportunity to revise and resubmit them. Approved proposals are ratified and become part of the body of ratified legislation for the given **topic area**, shaping the rules and regulations.
    
5.  **Enactment**: Enacted legislation enters a dedicated application designed for individual taxpayers. Here, taxpayers have the ability to allocate their taxes and coordinate the assignment of teams to implement the legislation effectively. This phase ensures that the laws passed are put into action with the necessary resources and coordination. The tax allocation and implementation app is outside the scope of this idea but will be forthcoming.
    
6.  **Retirement | Recycle**: Legislation that reaches its expiry date faces a decision point. It can either be recycled, allowing its implementors to re-enter the legislative process with updated proposals, or retired. In the retirement phase, the legislation is archived, and the teams responsible for its implementation are disbanded. This process streamlines the legislative framework and maintains relevance over time.
    
These six phases ensure a well-structured and adaptable legislative process that promotes active engagement and continuous improvement within the operations of government.

#### Proposal
#####  Proposing Legislation Disclaimer
Within the legislation proposal section of the app, a disclaimer regarding the usage of this feature is prominently displayed to ensure transparency and accountability and must be signed before being granted post, or amend privileges. 
The Proposing Legislation Disclaimer asserts that individuals who propose legislation, as well as those who amend legislation, assume responsibility for implementing or facilitating the implementation of the proposed legislation, provided that the legislation is adequately funded in the Ratify and Enactment phases and provided that the proposers and amenders are able to coordinate or contract to successfully enact the legislation. This step ensures that proposers are aware of the implications of their proposals and are committed to seeing them through to implementation. This disclaimer serves as a critical component of the legislative process, emphasizing the importance of responsibility and accountability in shaping the laws of the community.

 

#### Refinement 
During the refinement phase, no language may be added that would extend the proposal beyond the initial scope of the legislation determined at the outset of the Refinement phase. 
The legislation can be broken into sections, implementation plans can be elaborated, edge cases can be considered and accounted for. 
A special **Structured Text interface** mode may be activated by any user perusing a piece of legislation in the refinement phase.
This interface is derived from an algorithmic parsing of the legislation into structured chunks based on section, sentence, clause and word.  Each chunk may be:
- suggested upon
- commented upon
- voted up or down

Ultimately, only proposers or amenders are granted edit permissions to make changes to the legislation, but community feedback in these forms may be used to guide the modifications. 

##### Popularity Voting
The overall piece of legislation can be voted up or down during the refinement period. A variable threshold between one and seven items of legislation for consideration per period may be set per layer of the political hierarchy that determines the number of top voted pieces of legislation that may enter the voting phase. This number can be brought to vote during any legislative cycle to be changed for the following cycle. 

#### Vote
During the vote phase, the top voted pieces of refined legislation are brought to vote. During this 2 week to month long time period, the legislation remains static. The **Structured Text Interface** mode is available during this phase with only commentary allowed from users. The commentary from the Refinement phase is archived to allow for a focused conversation on the version being voted on. Comment threads may be started on any piece of structured text or the legislation as a whole, facilitating lively debate that will determine whether the legislation fails or is ratified. 

#### Ratify / Recycle
Ratification of legislation is determined by the outcome of a voting phase with ratified legislation moving into the Dynamic Tax Allocation system while legislation that fails to pass the vote or does not make it into the voting round is immediately re-entered into the proposal phase, to be either abandoned or modified until the next round of voting on it's associated topic arrives. 
##### Ratification / Passing Criteria
Ratification of legislation is determined by the outcome of a voting phase that meets two criteria:
###### Star Voting
Voting is done via a [star voting system](https://www.starvoting.org/) in which candidate legislation is attributed stars on a Likert 1-5 scale. Winners are determined by the average number of stars exceeding a _passing threshold_.  Each voting domain can bring the _passing threshold_ to vote, wherein the threshold of the averaged star count a piece of legislation must achieve to pass is determined. The threshold is agreed upon at each layer of the political hierarchy. 
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

-   A top-level drop-downs allow a user to move between different layers of government, providing access to counties, municipalities, states, regional, and federal levels.
-   Tabs across the top of the page offer the following choices:
- _Current Cycle_ for voting in the active election cycle, viewing and interacting with proposed legislation 
- _Upcoming Cycle_ for viewing, amending, and upvoting/downvoting  legislation proposed for future cycles in *
-  _Historical_ for reviewing past votes.
- _My Representatives_ for reviewing the votes made by your elected representatives, and for changing your representatives per **topic area**.

**Navigation:**

-   The primary means of navigation are individual "legislation posts," offering extensive options for user interaction. Users can sort, filter, collapse, preview, and maximize these posts to access relevant details.
-   Iconography and abbreviated labels on each "legislation post" facilitate quick recognition of topic categories, ensuring efficient browsing.

**Filtering:**

-   The left sidebar houses a range of filtering options, enabling users to tailor their view. These filters include sorting by "Time Frame," focusing on "Favorite Categories" with a nested list of the user's preferred topics, accessing "Starred Legislation" for marking important bills, tracking "Representative's Votes" through nested checkboxes for each representative, filtering by "Topic Category," and viewing "Tags" extracted from the currently filtered view for additional context and categorization.

This thoughtful layout ensures that users can navigate, engage with, and make informed decisions on legislative matters with ease within our dynamic voting system.

###  Timing of Cycles
In our dynamic voting system, the timing of voting is carefully structured to ensure fairness, participation, and to grant the ability for users to plan their participation. We implement a cyclic approach where political topics rotate in succession, each recurring at a set frequency. This deliberate scheduling allows participants to anticipate and plan their involvement in topics they care deeply about.

The voting process is complemented by a well-defined legislative timeline. Participants can propose legislation on any topic throughout the cycle; however, a month prior to a vote on a specific topic, no further legislation can be proposed for that particular topic in the upcoming vote.

The month leading window serves as an opportunity for platform participants to concentrate on refining and reviewing the legislation that will soon be up for a vote. It encourages thoughtful consideration and debate, ensuring that voters are well-informed about the issues at hand. Any new legislation proposed during this time is postponed to the subsequent cycle of that **topic area**, maintaining a structured and fair legislative process. Total characters and total reading time can also be used to limit the number of contender proposals entering the refinement and review period.

#### Revocation
Users may revoke their vote from any piece of legislation during the vote process at any point prior to the ratification decision at the conclusion of the vote period. 

#### Override
In emergency circumstances such as natural disaster, threat of war, etc it may be necessary to bring legislation to vote with more immediacy than the next cycle in which it's **topic area** would have come up for vote. 

### Abstention

In our dynamic voting system, participants have the flexibility to abstain from any vote, whether it pertains to an individual piece of legislation, a specific **topic area**, a particular level of government, or for a predetermined period, even indefinitely. To streamline this process, abstention settings are strategically placed within the settings tabs for each layer of the governance hierarchy and in each voting topic pane. This allows users to tailor their abstention preferences to specific levels of government or topics. All granular settings, spanning **topic area**s and layers of government, can be conveniently managed directly from their respective panes. Furthermore, these granular settings are aggregated into global abstention settings accessible from the global settings menu. This aggregated configuration is easily accessible through the user's profile settings menu, providing a centralized location for managing and customizing abstention preferences across the dynamic voting system.



## Representation
### Newcomer Wizard Intro
For newcomers to our platform, we've designed an intuitive wizard introduction that simplifies the dynamic representative system. Upon joining, users are greeted by a step-by-step guide that explains how the dynamic voting system works. This introductory wizard aims to make their experience seamless and informative.

One key feature of this wizard is a questionnaire reminiscent of popular platforms like isidewith.com. This questionnaire covers a comprehensive spectrum of political topics, each followed by multiple-choice answers that are sorted by popularity based on previous user responses. Our platform leverages artificial intelligence to distill similar answers into a coherent single response. If a user's perspective isn't already represented, they can provide their own response through free-form text input. Our AI will then suggest matches by comparing their input with distilled answers from other users.

Importantly, users have the freedom to answer as many or as few questions as they like, allowing for a flexible and personalized onboarding process. After completing the questionnaire, users will receive suggested representatives based on their alignment percentage. Additionally, they'll gain insight into the percentage of alignment with the entire perspective of a proposed representative, helping them identify unanswered **topic area**s that may not align with their suggested representative.

As users complete the multiple choices questions, users are provided with a set of suggested representatives selected based on overall congruency, measured by a percent match. Additionally, representatives are suggested based on percent congruence for each specific political **topic area**, ensuring each user can find congruent representation for their votes when they are unable to participate.

In order to provide full transparency to users, every person that opts to act as a representative will have all of their multiple choice answers, their entire voting history, and their legislative proposals, amendments, and active legislation made public and searchable. This will allow user's to continuously determine whether their representatives are aligned with their interests.

This introductory wizard not only simplifies the user experience but also empowers users to make informed choices and engage meaningfully with the dynamic representation system, enhancing their participation in the democratic process.


# Security
## Blockchain Voting

Blockchain technology stands as a cornerstone in fortifying the security and transparency of our dynamic voting system. By leveraging the decentralized nature of blockchain, we establish an unalterable ledger that captures and records all participant interactions, ensuring the integrity of the democratic process.

**Key Features:**

1. **Immutability:** Each participant's action, from proposing legislation to casting votes, is cryptographically sealed into a block. Once added to the blockchain, these blocks are linked in a way that makes altering any information within them practically impossible. This immutability safeguards the record of participant interactions, fostering trust and accountability.

2. **Decentralization:** Instead of relying on a central authority, our system utilizes a decentralized network of nodes to validate and record transactions. This ensures that no single entity has control over the entire system, reducing the risk of manipulation or fraud.

3. **Transparency:** The blockchain ledger is visible to all participants, allowing them to independently verify the accuracy of transactions. This transparency builds confidence in the legitimacy of the voting system and provides a comprehensive audit trail for every legislative proposal, vote, and interaction.

4. **Smart Contracts:** Smart contracts, self-executing contracts with coded terms, can automate various aspects of the voting process. For instance, they can enforce predefined rules for proposal submission, voting eligibility, and amendment acceptance. This automation not only streamlines the process but also reduces the likelihood of human error or manipulation.

5. **Security Against Cyber Threats:** The cryptographic algorithms employed in blockchain technology enhance the security of participant data. The decentralized and distributed nature of the blockchain mitigates the risk of single points of failure, making it resilient against cyber threats.

6. **Secure Identity Verification:** Blockchain can facilitate secure identity verification during participant registration. Once verified, the participant's identity is linked to their unique cryptographic key, ensuring a secure and reliable authentication process.

Incorporating blockchain into our dynamic voting system not only fortifies its security but also aligns with the principles of transparency, accountability, and trust that underpin a robust democratic process. This innovative integration ensures that every participant interaction is recorded and preserved, fostering a resilient and secure platform for democratic engagement.
<!--stackedit_data:
eyJkaXNjdXNzaW9ucyI6eyJXa2tCTWQzaW5aZmJPODhQIjp7In
RleHQiOiJzZXZlbiIsInN0YXJ0Ijo2NDQyLCJlbmQiOjY0NDd9
LCI0TFA3V2pSZkVsWTZtSmdOIjp7InRleHQiOiJudW1iZXIgY2
FuIGJlIGJyb3VnaHQgdG8gdm90ZSBkdXJpbmcgYW55IGxlZ2lz
bGF0aXZlIGN5Y2xlIiwic3RhcnQiOjY2NDYsImVuZCI6NjcwNH
0sIjRwMHpmQm51N2FLaG9rMGMiOnsidGV4dCI6ImZhaWxzIHRo
ZSB2b3Rpbmcgcm91bmQiLCJzdGFydCI6OTA5NiwiZW5kIjo5MD
k2fSwidERoUHNxeXNyaXNMbWUzVyI6eyJ0ZXh0IjoiZmFpbHMg
dGhlIHZvdGluZyByb3VuZCIsInN0YXJ0Ijo3NTk5LCJlbmQiOj
c1OTl9fSwiY29tbWVudHMiOnsiRzBFY1c1T2Q0MUEzVHJjTCI6
eyJkaXNjdXNzaW9uSWQiOiJXa2tCTWQzaW5aZmJPODhQIiwic3
ViIjoiZ286MTAxMDEyODc4MTI1NjY4MjI0MjE0IiwidGV4dCI6
Ik1heWJlIG1vcmUsIGJ1dCBJIHdvdWxkIG5vdCB3YW50IGhpZ2
hseSBlbmdhZ2VkIHVzZXJzIGJlaW5nIGFibGUgdG8gYWJ1c2Ug
dGhlIHN5c3RlbSBieSBwdXNoaW5nIHRocm91Z2ggbG90cyBvZi
BsZWdpc2xhdGlvbiBkdXJpbmcgdGltZXMgd2hlbiBmZXcgdXNl
cnMgYXJlIGFibGUgdG8gZW5nYWdlLiIsImNyZWF0ZWQiOjE3MD
Q2NjA2MDc2NDd9LCJmWElOWlluNnQzOG5qZlFEIjp7ImRpc2N1
c3Npb25JZCI6IjRMUDdXalJmRWxZNm1KZ04iLCJzdWIiOiJnbz
oxMDEwMTI4NzgxMjU2NjgyMjQyMTQiLCJ0ZXh0IjoiUG9zc2li
bHkgYWxzbyBhIGZlYXR1cmUgdG8gYnJpbmcgdG8gdm90ZSBzY2
hlZHVsZWQgY2hhbmdlcyBvZiB0aGUgdGhyZXNob2xkIGFjcm9z
cyBhIHNwZWNpZmljIHRpbWUgc3BhbiBiYXNlZCBvbiB0aGUgYX
ZhaWxhYmlsaXR5L2VuZ2FnZW1lbnQgb2YgdGhlIHBvcHVsYWNl
IGR1cmluZyBkaWZmZXJlbnQgdGltZXMgb2YgeWVhciBldGMiLC
JjcmVhdGVkIjoxNzA0NjYwODQyNDkxfSwibVdsNE9LdnJKWlV6
WWxpeSI6eyJkaXNjdXNzaW9uSWQiOiI0cDB6ZkJudTdhS2hvaz
BjIiwic3ViIjoiZ286MTAxMDEyODc4MTI1NjY4MjI0MjE0Iiwi
dGV4dCI6IlN1Y2Nlc3MgLyBGYWlsdXJlIHdpbGwgbmVlZCB0by
B0YWtlIGludG8gYWNjb3VudCBzb21lIHN0YXRpc3RpY2FsIG1v
ZGVsaW5nIG9mIHRoZSBwYXJ0aWNpcGF0aW5nIGVsZWN0b3JhdG
UsIHRoZSBxdWFudGl0eSBvZiB2b3RlcyBjb3VudGVkLCBtZWFz
dXJlZCBhZ2FpbnN0IGFuIGF2ZXJhZ2Ugb2YgcmVjZW50IHZvdG
VzIGNvdW50ZWQuIERldGVybWluaW5nIHdoYXQgcGFzc2VzIGFu
ZCB3aGF0IGRvZXNuJ3QgYmFzZWQgb24gdGhlIG51bWJlciBvZi
B2b3RlcyB3aXRoaW4gYSB2b3RpbmcgYm9keSBpcyBnb2luZyB0
byBiZSBhIGNyaXRpY2FsIGFuZCBjb21wbGV4IGZlYXR1cmUgdG
8gc29ydCBvdXQiLCJjcmVhdGVkIjoxNzA0NjY1NTMyMzgxfSwi
Y0wzM0ZneWN4clRXTXJBNSI6eyJkaXNjdXNzaW9uSWQiOiJ0RG
hQc3F5c3Jpc0xtZTNXIiwic3ViIjoiZ286MTAxMDEyODc4MTI1
NjY4MjI0MjE0IiwidGV4dCI6IlN1Y2Nlc3MgLyBGYWlsdXJlIH
dpbGwgbmVlZCB0byB0YWtlIGludG8gYWNjb3VudCBzb21lIHN0
YXRpc3RpY2FsIG1vZGVsaW5nIG9mIHRoZSBwYXJ0aWNpcGF0aW
5nIGVsZWN0b3JhdGUsIHRoZSBxdWFudGl0eSBvZiB2b3RlcyBj
b3VudGVkLCBtZWFzdXJlZCBhZ2FpbnN0IGFuIGF2ZXJhZ2Ugb2
YgcmVjZW50IHZvdGVzIGNvdW50ZWQuIERldGVybWluaW5nIHdo
YXQgcGFzc2VzIGFuZCB3aGF0IGRvZXNu4oCZdCBiYXNlZCBvbi
B0aGUgbnVtYmVyIG9mIHZvdGVzIHdpdGhpbiBhIHZvdGluZyBi
b2R5IGlzIGdvaW5nIHRvIGJlIGEgY3JpdGljYWwgYW5kIGNvbX
BsZXggZmVhdHVyZSB0byBzb3J0IG91dCIsImNyZWF0ZWQiOjE3
MDQ2NjU3NTc0ODR9fSwiaGlzdG9yeSI6WzE4NjA3MTUzMTEsLT
EwNjU1NDQ4NywxMzcyNzg0OTM5LC0xMDk2NzE5OTk1LC0xNzI1
NDM5MTk0LDExNTM2ODk2NywxNDI4MjM3NDcwLC0xMDE3MTA0MT
UwLDM0NTIxMTMyNCwyOTY1NDczMDEsMTMxNzMxOTY3MiwxMTg4
Njk3MzQwXX0=
-->