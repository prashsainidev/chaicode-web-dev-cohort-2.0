# IPL Management System

This ER diagram models an IPL management platform where teams, players, owners, sponsors, broadcasters, seasons, venues, and matches all connect through a realistic league structure.

The entities shared in the assignment were `teams`, `players`, `owners`, `sponsors`, and `broadcaster`. I kept those as the core of the design, but I also added `season`, `venue`, `match`, and a few junction-style transactional entities so the schema feels more realistic and submission-ready.

My goal in this design was to avoid putting too much business logic into a single table. Instead, I separated ownership, player-team association, sponsorship, and broadcasting rights so the ERD stays readable and also closer to how a real IPL-style management system would evolve over time.

## How I Structured The Design

1. I used `team` as the core cricket franchise entity.
2. I used `owner` separately and linked it through `team_owner` because one team can have multiple owners, and ownership can change over time.
3. I used `player` separately and linked it through `player_team_contract` because players can change teams across seasons.
4. I added `season` so matches, contracts, sponsorships, and broadcast rights can be tied to a specific IPL season.
5. I used `sponsor` and `team_sponsorship` separately because sponsorship is a business deal, not a fixed property of the team table.
6. I used `broadcaster` and `broadcast_rights` separately because broadcasting rights are usually attached at season level through contracts.
7. I added `venue`, `match`, and `match_team` so the league can be modeled beyond static master data.

## Main Tables And Why I Used Them

1. `team` stores franchise-level information.
2. `owner` stores owner or ownership-group information.
3. `team_owner` stores the ownership relationship between teams and owners.
4. `player` stores player details.
5. `season` stores season-level information.
6. `player_team_contract` stores which player belonged to which team in which season.
7. `sponsor` stores sponsor company details.
8. `team_sponsorship` stores sponsorship deals for teams across seasons.
9. `broadcaster` stores broadcaster or platform details.
10. `broadcast_rights` stores season-level broadcast deals.
11. `venue` stores stadium or venue information.
12. `match` stores match-level data.
13. `match_team` stores the participating teams for each match.

## Important Relationships

1. One team can have many owners through `team_owner`.
2. One owner can be linked to many teams through `team_owner`.
3. One player can appear in multiple team contracts across seasons.
4. One team can sign many players in a season.
5. One sponsor can sponsor many teams, and one team can also have many sponsors across seasons.
6. One broadcaster can hold many season rights over time.
7. One season can have many matches.
8. One venue can host many matches.
9. Each match links to two team records through `match_team`.

## Key Design Decisions

1. I avoided storing `owner_id` directly inside the `team` table because ownership is naturally many-to-many.
2. I avoided storing `team_id` directly inside `player` because IPL players move between teams in different seasons.
3. I separated `team_sponsorship` and `broadcast_rights` from the master entities so contract history can be modeled clearly.
4. I kept `match_team` separate from `match` so both participating teams can be stored cleanly without duplicating match columns.

## Files

1. `eraser-diagram.txt` is the editable source used to build the ER diagram.
2. An exported diagram image can be added later if needed.
