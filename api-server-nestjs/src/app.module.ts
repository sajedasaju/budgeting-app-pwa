import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetModule } from './budget/budget.module';
import { CashbookModule } from './cashbook/cashbook.module';
import { CategoryModule } from './category/category.module';
import { ExpenseModule } from './expense/expense.module';
import { IncomeModule } from './income/income.module';
import { AuthMiddleware } from './middleware/Auth.middleware';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { GoogleStrategy } from './auth/strategies/google.strategy';

import 'dotenv/config';
import { GoogleController } from './socialLogin/socialLogin.controller';
import { GoogleModule } from './socialLogin/socialLogin.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URI),
    UserModule,
    IncomeModule,
    ExpenseModule,
    CashbookModule,
    BudgetModule,
    CategoryModule,
    GoogleModule,
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('income/*', 'cashbook', 'expense/*', 'budget/*');
  }
}
