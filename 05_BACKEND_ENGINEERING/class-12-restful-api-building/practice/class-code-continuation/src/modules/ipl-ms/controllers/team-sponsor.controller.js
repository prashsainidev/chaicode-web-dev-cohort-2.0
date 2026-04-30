import * as teamSponsorService from "../services/team-sponsor.service.js";
import ApiResponse from "../../../common/utils/api-response.js";

const attachSponsor = async (req, res) => {
  const relation = await teamSponsorService.attachSponsor(req.body);
  ApiResponse.created(res, "Sponsor attached successfully", relation);
};

const getTeamSponsors = async (req, res) => {
  const relations = await teamSponsorService.getTeamSponsors(req.params.teamId);
  ApiResponse.ok(res, "Team sponsors fetched successfully", relations);
};

export { attachSponsor, getTeamSponsors };
