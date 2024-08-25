import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './common/prisma/prisma.module';
import { AdminsModule } from './models/admins/admins.module';
import { CompaniesModule } from './models/companies/companies.module';
import { CustomersModule } from './models/customers/customers.module';
import { ManagersModule } from './models/managers/managers.module';
import { UsersModule } from './models/users/users.module';
import { ValetsModule } from './models/valets/valets.module';

import { AddressesModule } from './models/addresses/addresses.module';
import { BookingTimelinesModule } from './models/booking-timelines/booking-timelines.module';
import { BookingsModule } from './models/bookings/bookings.module';
import { GaragesModule } from './models/garages/garages.module';
import { ReviewsModule } from './models/reviews/reviews.module';
import { SlotsModule } from './models/slots/slots.module';
import { ValetAssignmentsModule } from './models/valet-assignments/valet-assignments.module';
import { VerificationsModule } from './models/verifications/verifications.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.MAX_AGE,
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: true,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }),
    PrismaModule,
    UsersModule,
    AdminsModule,
    CustomersModule,
    ManagersModule,
    ValetsModule,
    CompaniesModule,
    GaragesModule,
    AddressesModule,
    SlotsModule,
    BookingsModule,
    ValetAssignmentsModule,
    BookingTimelinesModule,
    ReviewsModule,
    VerificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
