import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
// import { Observable } from 'rxjs';
import { ROLES_KEY } from './roles.decorators';
import { Role } from './roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requiresRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiresRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    return requiresRoles.some((role) => user.roles?.includes(role));
  }
}
