import { TMatchWithTeamNames } from './IMatch';

export default interface IMatchModel {
  findAll(): Promise<TMatchWithTeamNames[]>;
}
