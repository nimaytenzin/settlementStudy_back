import { MEMBER_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { Member } from './entities/member.entity';

@Injectable()
export class MemberService {
  constructor(
    @Inject(MEMBER_REPOSITORY)
    private readonly memberRepository: typeof Member,
  ) {}

  async create(createMemberDto) {
    return await this.memberRepository.create(createMemberDto);
  }

  findAll() {
    return `This action returns all member`;
  }

  async findOne(id: number) {
    return await this.memberRepository.findOne({
      where: { id },
    });
  }

  async findAllByHousehold(householdId: number) {
    return await this.memberRepository.findAll({
      where: { householdId: householdId },
    });
  }

  async update(id: number, data) {
    await this.memberRepository.update(
      { ...data },
      {
        where: { id },
        returning: true,
      },
    );
    return await this.memberRepository.findOne({
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
