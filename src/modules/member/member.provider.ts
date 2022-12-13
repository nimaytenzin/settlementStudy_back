import { MEMBER_REPOSITORY } from '../../core/constants/index';
import { Member } from './entities/member.entity';

export const MembersProvider = [
  {
    provide: MEMBER_REPOSITORY,
    useValue: Member,
  },
];
