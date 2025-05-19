import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { LoginUserInput } from './dto/login-user.input';
import { User } from './user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => String)
  async signup(@Args('input') input: CreateUserInput): Promise<string> {
    const result = await this.userService.signup(input);
    return result.token;
  }

  @Mutation(() => String)
  async login(@Args('input') input: LoginUserInput): Promise<string> {
    const result = await this.userService.login(input);
    return result.token;
  }

  @Query(() => User)
  async getUser(@Context('req') req): Promise<User> {
    const auth = req.headers.authorization || '';
    const token = auth.replace('Bearer ', '');

    try {
      const payload = await this.userService['jwtService'].verify(token);
      return this.userService.getUser(payload.userId);
    } catch (e) {
      throw new Error('Unauthorized');
    }
  }
  
}
