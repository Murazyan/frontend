import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { TopicService } from "../../services/topic.service";

@Injectable({
    providedIn: 'root'
})
export class CanStartQUiz implements CanActivate {

  constructor(  private topicService: TopicService,
                private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    const selectedTopic = this.topicService.getSelectedTopic();
    if (!!selectedTopic) {
      return true;
    } else {
      this.router.navigate(['']); 
      return false;
    }
  }
}
