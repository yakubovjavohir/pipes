import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CustomError } from 'src/lib/customError';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRole = this.reflector.get<string>('role', context.getHandler());
    
    if (!requiredRole) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    
    const user = request.user;
    
    const bool =  user?.role === requiredRole;
    
    if(!bool){
      throw new CustomError(403, "you are not acses")
    }
    return bool
    
  }
}