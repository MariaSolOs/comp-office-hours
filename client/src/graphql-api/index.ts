import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Appointment = {
  _id: Scalars['ID'];
  instructor: Instructor;
  date: Scalars['String'];
  timeslot: Scalars['String'];
  isBooked: Scalars['Boolean'];
};

export type Instructor = {
  _id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  zoomLink: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  availDays?: Maybe<Array<Scalars['String']>>;
};

export type Mutation = {
  /** Books an appointment. */
  bookAppointment: Appointment;
};


export type MutationBookAppointmentArgs = {
  apptId: Scalars['ID'];
};

export type Query = {
  /** List of all the instructors in the course. */
  instructors: Array<Instructor>;
  /** Appointments of the specified instructor on the indicated date. */
  appointments?: Maybe<Array<Appointment>>;
};


export type QueryAppointmentsArgs = {
  instId: Scalars['ID'];
  date: Scalars['String'];
};
