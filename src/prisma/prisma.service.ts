import { Injectable , OnModuleDestroy,OnModuleInit} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy, OnModuleInit {
    constructor(){
        super({
            datasources:{
                db:{
                    url:"postgresql://dawit:bustransport@localhost:5432/nestjs?schema=public"
                }
            }
        })
    }
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
}

