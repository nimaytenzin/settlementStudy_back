import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { MembersProvider } from './member.provider';

@Module({
  controllers: [MemberController],
  providers: [MemberService, ...MembersProvider],
})
export class MemberModule {}
