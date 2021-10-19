import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOneDepartmentArgs,
  FindManyDepartmentArgs,
  FindUniqueDepartmentArgs,
  Department,
  UpdateOneDepartmentArgs,
} from 'src/@generated/department';
import { DataService } from 'src/data/data.service';
import { paginate, Paginated } from 'src/shared/models/pagination';

@ObjectType()
export class PaginatedDepartment extends Paginated(Department) {}

@Resolver(() => Department)
export class DepartmentsResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => Department, { name: 'department', nullable: true })
  async getDepartment(
    @Args() args: FindUniqueDepartmentArgs,
  ): Promise<Department> {
    return this.data.department.findUnique({ where: args.where });
  }

  @Query(() => PaginatedDepartment, { name: 'departments' })
  async getDepartments(
    @Args() args: FindManyDepartmentArgs,
  ): Promise<PaginatedDepartment> {
    return paginate(this.data.department, args);
  }

  @Mutation(() => Department)
  async createDepartment(
    @Args() args: CreateOneDepartmentArgs,
  ): Promise<Department> {
    return this.data.department.create({
      data: args.data,
    });
  }

  @Mutation(() => Department)
  async updateDepartment(
    @Args() args: UpdateOneDepartmentArgs,
  ): Promise<Department> {
    return this.data.department.update({ where: args.where, data: args.data });
  }

  @Mutation(() => Department)
  async deleteDepartment(
    @Args() args: FindUniqueDepartmentArgs,
  ): Promise<Department> {
    return this.data.department.delete({ where: args.where });
  }
}
