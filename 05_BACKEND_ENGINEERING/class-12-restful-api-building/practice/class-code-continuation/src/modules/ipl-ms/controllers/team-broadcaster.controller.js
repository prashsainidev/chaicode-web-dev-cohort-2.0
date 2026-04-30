import * as teamBroadcasterService from "../services/team-broadcaster.service.js";
import ApiResponse from "../../../common/utils/api-response.js";

const assignBroadcaster = async (req, res) => {
  const relation = await teamBroadcasterService.assignBroadcaster(req.body);
  ApiResponse.created(res, "Broadcaster assigned successfully", relation);
};

const getTeamBroadcasters = async (req, res) => {
  const relations = await teamBroadcasterService.getTeamBroadcasters(req.params.teamId);
  ApiResponse.ok(res, "Team broadcasters fetched successfully", relations);
};

export { assignBroadcaster, getTeamBroadcasters };
