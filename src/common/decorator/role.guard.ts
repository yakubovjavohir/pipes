import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

class YouAreNotAcc extends HttpException {
  constructor(){
    super("you are not acses", HttpStatus.FORBIDDEN)
  }
}

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
      throw new YouAreNotAcc()
    }
    return bool
    
  }
}