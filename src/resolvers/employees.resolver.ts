import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOneEmployeeArgs,
  FindManyEmployeeArgs,
  FindUniqueEmployeeArgs,
  Employee,
  UpdateOneEmployeeArgs,
} from 'src/@generated/employee';
import { DataService } from 'src/data/data.service';
import { paginate, Paginated } from 'src/shared/models/pagination';

@ObjectType()
export class PaginatedEmployee extends Paginated(Employee) {}

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => Employee, { name: 'employee', nullable: true })
  async getEmployee(@Args() args: FindUniqueEmployeeArgs): Promise<Employee> {
    return this.data.employee.findUnique({ where: args.where });
  }

  @Query(() => PaginatedEmployee, { name: 'employees' })
  async getEmployees(
    @Args() args: FindManyEmployeeArgs,
  ): Promise<PaginatedEmployee> {
    return paginate(this.data.employee, args);
  }

  @Mutation(() => Employee)
  async createEmployee(@Args() args: CreateOneEmployeeArgs): Promise<Employee> {
    return this.data.employee.create({
      data: args.data,
    });
  }

  @Mutation(() => Employee)
  async updateEmployee(@Args() args: UpdateOneEmployeeArgs): Promise<Employee> {
    return this.data.employee.update({ where: args.where, data: args.data });
  }

  @Mutation(() => Employee)
  async deleteEmployee(
    @Args() args: FindUniqueEmployeeArgs,
  ): Promise<Employee> {
    return this.data.employee.delete({ where: args.where });
  }
}
