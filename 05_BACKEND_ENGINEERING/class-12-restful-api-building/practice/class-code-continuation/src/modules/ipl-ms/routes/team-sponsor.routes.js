import { Router } from "express";
import * as controller from "../controllers/team-sponsor.controller.js";

const router = Router();

router.post("/", controller.attachSponsor);
router.get("/:teamId", controller.getTeamSponsors);

export default router;
