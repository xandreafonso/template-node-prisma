# Start

> yarn dev

## Tutorial Rocketseat/Fullcycle sobre Prisma

Prisma: A revolução para se trabalhar com banco de dados

https://www.youtube.com/watch?v=C8Oc31uk2Hw

## Começando o projeto

> yarn init -y

> yarn add typescript -D

> yarn tsc --init

## Ferramentas de testes, dev e prod

> yarn add tsx -D

> yarn add tsup -D

> yarn add vitest -D

> yarn add axios -D

## Prisma 

> yarn add prisma -D

> yarn add @prisma/client

> yarn prisma init

> npx prisma migrate dev --name init

> yarn prisma db push

> yarn prisma studio

## Express

> yarn add express

> yarn add @types/express

# PRISMA DOCS

Usage

  $ prisma [command]

Commands

            init   Set up Prisma for your app
        generate   Generate artifacts (e.g. Prisma Client)
              db   Manage your database schema and lifecycle
         migrate   Migrate your database
          studio   Browse your data with Prisma Studio
        validate   Validate your Prisma schema
          format   Format your Prisma schema

Flags

     --preview-feature   Run Preview Prisma commands

Examples

  Set up a new Prisma project
  $ prisma init

  Generate artifacts (e.g. Prisma Client)
  $ prisma generate

  Browse your data
  $ prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ prisma migrate dev
  
  Pull the schema from an existing database, updating the Prisma schema
  $ prisma db pull

  Push the Prisma schema state to the database
  $ prisma db push

  Validate your Prisma schema
  $ prisma validate

  Format your Prisma schema
  $ prisma format
