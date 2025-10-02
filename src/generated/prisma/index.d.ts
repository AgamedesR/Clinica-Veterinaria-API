
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Secretario
 * 
 */
export type Secretario = $Result.DefaultSelection<Prisma.$SecretarioPayload>
/**
 * Model Dentista
 * 
 */
export type Dentista = $Result.DefaultSelection<Prisma.$DentistaPayload>
/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Consulta
 * 
 */
export type Consulta = $Result.DefaultSelection<Prisma.$ConsultaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Secretarios
 * const secretarios = await prisma.secretario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Secretarios
   * const secretarios = await prisma.secretario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.secretario`: Exposes CRUD operations for the **Secretario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Secretarios
    * const secretarios = await prisma.secretario.findMany()
    * ```
    */
  get secretario(): Prisma.SecretarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dentista`: Exposes CRUD operations for the **Dentista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dentistas
    * const dentistas = await prisma.dentista.findMany()
    * ```
    */
  get dentista(): Prisma.DentistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consulta`: Exposes CRUD operations for the **Consulta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultas
    * const consultas = await prisma.consulta.findMany()
    * ```
    */
  get consulta(): Prisma.ConsultaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Secretario: 'Secretario',
    Dentista: 'Dentista',
    Paciente: 'Paciente',
    Consulta: 'Consulta'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "secretario" | "dentista" | "paciente" | "consulta"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Secretario: {
        payload: Prisma.$SecretarioPayload<ExtArgs>
        fields: Prisma.SecretarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecretarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecretarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>
          }
          findFirst: {
            args: Prisma.SecretarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecretarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>
          }
          findMany: {
            args: Prisma.SecretarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>[]
          }
          create: {
            args: Prisma.SecretarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>
          }
          createMany: {
            args: Prisma.SecretarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecretarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>[]
          }
          delete: {
            args: Prisma.SecretarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>
          }
          update: {
            args: Prisma.SecretarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>
          }
          deleteMany: {
            args: Prisma.SecretarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecretarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecretarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>[]
          }
          upsert: {
            args: Prisma.SecretarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>
          }
          aggregate: {
            args: Prisma.SecretarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecretario>
          }
          groupBy: {
            args: Prisma.SecretarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecretarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecretarioCountArgs<ExtArgs>
            result: $Utils.Optional<SecretarioCountAggregateOutputType> | number
          }
        }
      }
      Dentista: {
        payload: Prisma.$DentistaPayload<ExtArgs>
        fields: Prisma.DentistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DentistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DentistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>
          }
          findFirst: {
            args: Prisma.DentistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DentistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>
          }
          findMany: {
            args: Prisma.DentistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>[]
          }
          create: {
            args: Prisma.DentistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>
          }
          createMany: {
            args: Prisma.DentistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DentistaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>[]
          }
          delete: {
            args: Prisma.DentistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>
          }
          update: {
            args: Prisma.DentistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>
          }
          deleteMany: {
            args: Prisma.DentistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DentistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DentistaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>[]
          }
          upsert: {
            args: Prisma.DentistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>
          }
          aggregate: {
            args: Prisma.DentistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDentista>
          }
          groupBy: {
            args: Prisma.DentistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DentistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DentistaCountArgs<ExtArgs>
            result: $Utils.Optional<DentistaCountAggregateOutputType> | number
          }
        }
      }
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Consulta: {
        payload: Prisma.$ConsultaPayload<ExtArgs>
        fields: Prisma.ConsultaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findFirst: {
            args: Prisma.ConsultaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findMany: {
            args: Prisma.ConsultaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          create: {
            args: Prisma.ConsultaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          createMany: {
            args: Prisma.ConsultaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          delete: {
            args: Prisma.ConsultaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          update: {
            args: Prisma.ConsultaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          deleteMany: {
            args: Prisma.ConsultaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          upsert: {
            args: Prisma.ConsultaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          aggregate: {
            args: Prisma.ConsultaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsulta>
          }
          groupBy: {
            args: Prisma.ConsultaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultaCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    secretario?: SecretarioOmit
    dentista?: DentistaOmit
    paciente?: PacienteOmit
    consulta?: ConsultaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DentistaCountOutputType
   */

  export type DentistaCountOutputType = {
    pacientes: number
    consultas: number
  }

  export type DentistaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | DentistaCountOutputTypeCountPacientesArgs
    consultas?: boolean | DentistaCountOutputTypeCountConsultasArgs
  }

  // Custom InputTypes
  /**
   * DentistaCountOutputType without action
   */
  export type DentistaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DentistaCountOutputType
     */
    select?: DentistaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DentistaCountOutputType without action
   */
  export type DentistaCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }

  /**
   * DentistaCountOutputType without action
   */
  export type DentistaCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
  }


  /**
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    consultas: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | PacienteCountOutputTypeCountConsultasArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Secretario
   */

  export type AggregateSecretario = {
    _count: SecretarioCountAggregateOutputType | null
    _avg: SecretarioAvgAggregateOutputType | null
    _sum: SecretarioSumAggregateOutputType | null
    _min: SecretarioMinAggregateOutputType | null
    _max: SecretarioMaxAggregateOutputType | null
  }

  export type SecretarioAvgAggregateOutputType = {
    id: number | null
    idade: number | null
  }

  export type SecretarioSumAggregateOutputType = {
    id: number | null
    idade: number | null
  }

  export type SecretarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    idade: number | null
  }

  export type SecretarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    idade: number | null
  }

  export type SecretarioCountAggregateOutputType = {
    id: number
    nome: number
    idade: number
    _all: number
  }


  export type SecretarioAvgAggregateInputType = {
    id?: true
    idade?: true
  }

  export type SecretarioSumAggregateInputType = {
    id?: true
    idade?: true
  }

  export type SecretarioMinAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
  }

  export type SecretarioMaxAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
  }

  export type SecretarioCountAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    _all?: true
  }

  export type SecretarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Secretario to aggregate.
     */
    where?: SecretarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarios to fetch.
     */
    orderBy?: SecretarioOrderByWithRelationInput | SecretarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecretarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Secretarios
    **/
    _count?: true | SecretarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecretarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecretarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecretarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecretarioMaxAggregateInputType
  }

  export type GetSecretarioAggregateType<T extends SecretarioAggregateArgs> = {
        [P in keyof T & keyof AggregateSecretario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecretario[P]>
      : GetScalarType<T[P], AggregateSecretario[P]>
  }




  export type SecretarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecretarioWhereInput
    orderBy?: SecretarioOrderByWithAggregationInput | SecretarioOrderByWithAggregationInput[]
    by: SecretarioScalarFieldEnum[] | SecretarioScalarFieldEnum
    having?: SecretarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecretarioCountAggregateInputType | true
    _avg?: SecretarioAvgAggregateInputType
    _sum?: SecretarioSumAggregateInputType
    _min?: SecretarioMinAggregateInputType
    _max?: SecretarioMaxAggregateInputType
  }

  export type SecretarioGroupByOutputType = {
    id: number
    nome: string
    idade: number
    _count: SecretarioCountAggregateOutputType | null
    _avg: SecretarioAvgAggregateOutputType | null
    _sum: SecretarioSumAggregateOutputType | null
    _min: SecretarioMinAggregateOutputType | null
    _max: SecretarioMaxAggregateOutputType | null
  }

  type GetSecretarioGroupByPayload<T extends SecretarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecretarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecretarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecretarioGroupByOutputType[P]>
            : GetScalarType<T[P], SecretarioGroupByOutputType[P]>
        }
      >
    >


  export type SecretarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
  }, ExtArgs["result"]["secretario"]>

  export type SecretarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
  }, ExtArgs["result"]["secretario"]>

  export type SecretarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
  }, ExtArgs["result"]["secretario"]>

  export type SecretarioSelectScalar = {
    id?: boolean
    nome?: boolean
    idade?: boolean
  }

  export type SecretarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "idade", ExtArgs["result"]["secretario"]>

  export type $SecretarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Secretario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      idade: number
    }, ExtArgs["result"]["secretario"]>
    composites: {}
  }

  type SecretarioGetPayload<S extends boolean | null | undefined | SecretarioDefaultArgs> = $Result.GetResult<Prisma.$SecretarioPayload, S>

  type SecretarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecretarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecretarioCountAggregateInputType | true
    }

  export interface SecretarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Secretario'], meta: { name: 'Secretario' } }
    /**
     * Find zero or one Secretario that matches the filter.
     * @param {SecretarioFindUniqueArgs} args - Arguments to find a Secretario
     * @example
     * // Get one Secretario
     * const secretario = await prisma.secretario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecretarioFindUniqueArgs>(args: SelectSubset<T, SecretarioFindUniqueArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Secretario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecretarioFindUniqueOrThrowArgs} args - Arguments to find a Secretario
     * @example
     * // Get one Secretario
     * const secretario = await prisma.secretario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecretarioFindUniqueOrThrowArgs>(args: SelectSubset<T, SecretarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secretario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretarioFindFirstArgs} args - Arguments to find a Secretario
     * @example
     * // Get one Secretario
     * const secretario = await prisma.secretario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecretarioFindFirstArgs>(args?: SelectSubset<T, SecretarioFindFirstArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secretario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretarioFindFirstOrThrowArgs} args - Arguments to find a Secretario
     * @example
     * // Get one Secretario
     * const secretario = await prisma.secretario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecretarioFindFirstOrThrowArgs>(args?: SelectSubset<T, SecretarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Secretarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Secretarios
     * const secretarios = await prisma.secretario.findMany()
     * 
     * // Get first 10 Secretarios
     * const secretarios = await prisma.secretario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const secretarioWithIdOnly = await prisma.secretario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecretarioFindManyArgs>(args?: SelectSubset<T, SecretarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Secretario.
     * @param {SecretarioCreateArgs} args - Arguments to create a Secretario.
     * @example
     * // Create one Secretario
     * const Secretario = await prisma.secretario.create({
     *   data: {
     *     // ... data to create a Secretario
     *   }
     * })
     * 
     */
    create<T extends SecretarioCreateArgs>(args: SelectSubset<T, SecretarioCreateArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Secretarios.
     * @param {SecretarioCreateManyArgs} args - Arguments to create many Secretarios.
     * @example
     * // Create many Secretarios
     * const secretario = await prisma.secretario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecretarioCreateManyArgs>(args?: SelectSubset<T, SecretarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Secretarios and returns the data saved in the database.
     * @param {SecretarioCreateManyAndReturnArgs} args - Arguments to create many Secretarios.
     * @example
     * // Create many Secretarios
     * const secretario = await prisma.secretario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Secretarios and only return the `id`
     * const secretarioWithIdOnly = await prisma.secretario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecretarioCreateManyAndReturnArgs>(args?: SelectSubset<T, SecretarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Secretario.
     * @param {SecretarioDeleteArgs} args - Arguments to delete one Secretario.
     * @example
     * // Delete one Secretario
     * const Secretario = await prisma.secretario.delete({
     *   where: {
     *     // ... filter to delete one Secretario
     *   }
     * })
     * 
     */
    delete<T extends SecretarioDeleteArgs>(args: SelectSubset<T, SecretarioDeleteArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Secretario.
     * @param {SecretarioUpdateArgs} args - Arguments to update one Secretario.
     * @example
     * // Update one Secretario
     * const secretario = await prisma.secretario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecretarioUpdateArgs>(args: SelectSubset<T, SecretarioUpdateArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Secretarios.
     * @param {SecretarioDeleteManyArgs} args - Arguments to filter Secretarios to delete.
     * @example
     * // Delete a few Secretarios
     * const { count } = await prisma.secretario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecretarioDeleteManyArgs>(args?: SelectSubset<T, SecretarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secretarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Secretarios
     * const secretario = await prisma.secretario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecretarioUpdateManyArgs>(args: SelectSubset<T, SecretarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secretarios and returns the data updated in the database.
     * @param {SecretarioUpdateManyAndReturnArgs} args - Arguments to update many Secretarios.
     * @example
     * // Update many Secretarios
     * const secretario = await prisma.secretario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Secretarios and only return the `id`
     * const secretarioWithIdOnly = await prisma.secretario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecretarioUpdateManyAndReturnArgs>(args: SelectSubset<T, SecretarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Secretario.
     * @param {SecretarioUpsertArgs} args - Arguments to update or create a Secretario.
     * @example
     * // Update or create a Secretario
     * const secretario = await prisma.secretario.upsert({
     *   create: {
     *     // ... data to create a Secretario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Secretario we want to update
     *   }
     * })
     */
    upsert<T extends SecretarioUpsertArgs>(args: SelectSubset<T, SecretarioUpsertArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Secretarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretarioCountArgs} args - Arguments to filter Secretarios to count.
     * @example
     * // Count the number of Secretarios
     * const count = await prisma.secretario.count({
     *   where: {
     *     // ... the filter for the Secretarios we want to count
     *   }
     * })
    **/
    count<T extends SecretarioCountArgs>(
      args?: Subset<T, SecretarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecretarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Secretario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecretarioAggregateArgs>(args: Subset<T, SecretarioAggregateArgs>): Prisma.PrismaPromise<GetSecretarioAggregateType<T>>

    /**
     * Group by Secretario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecretarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecretarioGroupByArgs['orderBy'] }
        : { orderBy?: SecretarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecretarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecretarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Secretario model
   */
  readonly fields: SecretarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Secretario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecretarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Secretario model
   */
  interface SecretarioFieldRefs {
    readonly id: FieldRef<"Secretario", 'Int'>
    readonly nome: FieldRef<"Secretario", 'String'>
    readonly idade: FieldRef<"Secretario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Secretario findUnique
   */
  export type SecretarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * Filter, which Secretario to fetch.
     */
    where: SecretarioWhereUniqueInput
  }

  /**
   * Secretario findUniqueOrThrow
   */
  export type SecretarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * Filter, which Secretario to fetch.
     */
    where: SecretarioWhereUniqueInput
  }

  /**
   * Secretario findFirst
   */
  export type SecretarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * Filter, which Secretario to fetch.
     */
    where?: SecretarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarios to fetch.
     */
    orderBy?: SecretarioOrderByWithRelationInput | SecretarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Secretarios.
     */
    cursor?: SecretarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Secretarios.
     */
    distinct?: SecretarioScalarFieldEnum | SecretarioScalarFieldEnum[]
  }

  /**
   * Secretario findFirstOrThrow
   */
  export type SecretarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * Filter, which Secretario to fetch.
     */
    where?: SecretarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarios to fetch.
     */
    orderBy?: SecretarioOrderByWithRelationInput | SecretarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Secretarios.
     */
    cursor?: SecretarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Secretarios.
     */
    distinct?: SecretarioScalarFieldEnum | SecretarioScalarFieldEnum[]
  }

  /**
   * Secretario findMany
   */
  export type SecretarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * Filter, which Secretarios to fetch.
     */
    where?: SecretarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarios to fetch.
     */
    orderBy?: SecretarioOrderByWithRelationInput | SecretarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Secretarios.
     */
    cursor?: SecretarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarios.
     */
    skip?: number
    distinct?: SecretarioScalarFieldEnum | SecretarioScalarFieldEnum[]
  }

  /**
   * Secretario create
   */
  export type SecretarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Secretario.
     */
    data: XOR<SecretarioCreateInput, SecretarioUncheckedCreateInput>
  }

  /**
   * Secretario createMany
   */
  export type SecretarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Secretarios.
     */
    data: SecretarioCreateManyInput | SecretarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Secretario createManyAndReturn
   */
  export type SecretarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * The data used to create many Secretarios.
     */
    data: SecretarioCreateManyInput | SecretarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Secretario update
   */
  export type SecretarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Secretario.
     */
    data: XOR<SecretarioUpdateInput, SecretarioUncheckedUpdateInput>
    /**
     * Choose, which Secretario to update.
     */
    where: SecretarioWhereUniqueInput
  }

  /**
   * Secretario updateMany
   */
  export type SecretarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Secretarios.
     */
    data: XOR<SecretarioUpdateManyMutationInput, SecretarioUncheckedUpdateManyInput>
    /**
     * Filter which Secretarios to update
     */
    where?: SecretarioWhereInput
    /**
     * Limit how many Secretarios to update.
     */
    limit?: number
  }

  /**
   * Secretario updateManyAndReturn
   */
  export type SecretarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * The data used to update Secretarios.
     */
    data: XOR<SecretarioUpdateManyMutationInput, SecretarioUncheckedUpdateManyInput>
    /**
     * Filter which Secretarios to update
     */
    where?: SecretarioWhereInput
    /**
     * Limit how many Secretarios to update.
     */
    limit?: number
  }

  /**
   * Secretario upsert
   */
  export type SecretarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Secretario to update in case it exists.
     */
    where: SecretarioWhereUniqueInput
    /**
     * In case the Secretario found by the `where` argument doesn't exist, create a new Secretario with this data.
     */
    create: XOR<SecretarioCreateInput, SecretarioUncheckedCreateInput>
    /**
     * In case the Secretario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecretarioUpdateInput, SecretarioUncheckedUpdateInput>
  }

  /**
   * Secretario delete
   */
  export type SecretarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * Filter which Secretario to delete.
     */
    where: SecretarioWhereUniqueInput
  }

  /**
   * Secretario deleteMany
   */
  export type SecretarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Secretarios to delete
     */
    where?: SecretarioWhereInput
    /**
     * Limit how many Secretarios to delete.
     */
    limit?: number
  }

  /**
   * Secretario without action
   */
  export type SecretarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
  }


  /**
   * Model Dentista
   */

  export type AggregateDentista = {
    _count: DentistaCountAggregateOutputType | null
    _avg: DentistaAvgAggregateOutputType | null
    _sum: DentistaSumAggregateOutputType | null
    _min: DentistaMinAggregateOutputType | null
    _max: DentistaMaxAggregateOutputType | null
  }

  export type DentistaAvgAggregateOutputType = {
    id: number | null
  }

  export type DentistaSumAggregateOutputType = {
    id: number | null
  }

  export type DentistaMinAggregateOutputType = {
    id: number | null
    cro: string | null
    nome: string | null
    especialidade: string | null
  }

  export type DentistaMaxAggregateOutputType = {
    id: number | null
    cro: string | null
    nome: string | null
    especialidade: string | null
  }

  export type DentistaCountAggregateOutputType = {
    id: number
    cro: number
    nome: number
    especialidade: number
    _all: number
  }


  export type DentistaAvgAggregateInputType = {
    id?: true
  }

  export type DentistaSumAggregateInputType = {
    id?: true
  }

  export type DentistaMinAggregateInputType = {
    id?: true
    cro?: true
    nome?: true
    especialidade?: true
  }

  export type DentistaMaxAggregateInputType = {
    id?: true
    cro?: true
    nome?: true
    especialidade?: true
  }

  export type DentistaCountAggregateInputType = {
    id?: true
    cro?: true
    nome?: true
    especialidade?: true
    _all?: true
  }

  export type DentistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dentista to aggregate.
     */
    where?: DentistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dentistas to fetch.
     */
    orderBy?: DentistaOrderByWithRelationInput | DentistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DentistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dentistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dentistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dentistas
    **/
    _count?: true | DentistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DentistaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DentistaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DentistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DentistaMaxAggregateInputType
  }

  export type GetDentistaAggregateType<T extends DentistaAggregateArgs> = {
        [P in keyof T & keyof AggregateDentista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDentista[P]>
      : GetScalarType<T[P], AggregateDentista[P]>
  }




  export type DentistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DentistaWhereInput
    orderBy?: DentistaOrderByWithAggregationInput | DentistaOrderByWithAggregationInput[]
    by: DentistaScalarFieldEnum[] | DentistaScalarFieldEnum
    having?: DentistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DentistaCountAggregateInputType | true
    _avg?: DentistaAvgAggregateInputType
    _sum?: DentistaSumAggregateInputType
    _min?: DentistaMinAggregateInputType
    _max?: DentistaMaxAggregateInputType
  }

  export type DentistaGroupByOutputType = {
    id: number
    cro: string
    nome: string
    especialidade: string
    _count: DentistaCountAggregateOutputType | null
    _avg: DentistaAvgAggregateOutputType | null
    _sum: DentistaSumAggregateOutputType | null
    _min: DentistaMinAggregateOutputType | null
    _max: DentistaMaxAggregateOutputType | null
  }

  type GetDentistaGroupByPayload<T extends DentistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DentistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DentistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DentistaGroupByOutputType[P]>
            : GetScalarType<T[P], DentistaGroupByOutputType[P]>
        }
      >
    >


  export type DentistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cro?: boolean
    nome?: boolean
    especialidade?: boolean
    pacientes?: boolean | Dentista$pacientesArgs<ExtArgs>
    consultas?: boolean | Dentista$consultasArgs<ExtArgs>
    _count?: boolean | DentistaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dentista"]>

  export type DentistaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cro?: boolean
    nome?: boolean
    especialidade?: boolean
  }, ExtArgs["result"]["dentista"]>

  export type DentistaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cro?: boolean
    nome?: boolean
    especialidade?: boolean
  }, ExtArgs["result"]["dentista"]>

  export type DentistaSelectScalar = {
    id?: boolean
    cro?: boolean
    nome?: boolean
    especialidade?: boolean
  }

  export type DentistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cro" | "nome" | "especialidade", ExtArgs["result"]["dentista"]>
  export type DentistaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | Dentista$pacientesArgs<ExtArgs>
    consultas?: boolean | Dentista$consultasArgs<ExtArgs>
    _count?: boolean | DentistaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DentistaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DentistaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DentistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dentista"
    objects: {
      pacientes: Prisma.$PacientePayload<ExtArgs>[]
      consultas: Prisma.$ConsultaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cro: string
      nome: string
      especialidade: string
    }, ExtArgs["result"]["dentista"]>
    composites: {}
  }

  type DentistaGetPayload<S extends boolean | null | undefined | DentistaDefaultArgs> = $Result.GetResult<Prisma.$DentistaPayload, S>

  type DentistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DentistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DentistaCountAggregateInputType | true
    }

  export interface DentistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dentista'], meta: { name: 'Dentista' } }
    /**
     * Find zero or one Dentista that matches the filter.
     * @param {DentistaFindUniqueArgs} args - Arguments to find a Dentista
     * @example
     * // Get one Dentista
     * const dentista = await prisma.dentista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DentistaFindUniqueArgs>(args: SelectSubset<T, DentistaFindUniqueArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dentista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DentistaFindUniqueOrThrowArgs} args - Arguments to find a Dentista
     * @example
     * // Get one Dentista
     * const dentista = await prisma.dentista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DentistaFindUniqueOrThrowArgs>(args: SelectSubset<T, DentistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dentista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DentistaFindFirstArgs} args - Arguments to find a Dentista
     * @example
     * // Get one Dentista
     * const dentista = await prisma.dentista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DentistaFindFirstArgs>(args?: SelectSubset<T, DentistaFindFirstArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dentista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DentistaFindFirstOrThrowArgs} args - Arguments to find a Dentista
     * @example
     * // Get one Dentista
     * const dentista = await prisma.dentista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DentistaFindFirstOrThrowArgs>(args?: SelectSubset<T, DentistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dentistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DentistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dentistas
     * const dentistas = await prisma.dentista.findMany()
     * 
     * // Get first 10 Dentistas
     * const dentistas = await prisma.dentista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dentistaWithIdOnly = await prisma.dentista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DentistaFindManyArgs>(args?: SelectSubset<T, DentistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dentista.
     * @param {DentistaCreateArgs} args - Arguments to create a Dentista.
     * @example
     * // Create one Dentista
     * const Dentista = await prisma.dentista.create({
     *   data: {
     *     // ... data to create a Dentista
     *   }
     * })
     * 
     */
    create<T extends DentistaCreateArgs>(args: SelectSubset<T, DentistaCreateArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dentistas.
     * @param {DentistaCreateManyArgs} args - Arguments to create many Dentistas.
     * @example
     * // Create many Dentistas
     * const dentista = await prisma.dentista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DentistaCreateManyArgs>(args?: SelectSubset<T, DentistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dentistas and returns the data saved in the database.
     * @param {DentistaCreateManyAndReturnArgs} args - Arguments to create many Dentistas.
     * @example
     * // Create many Dentistas
     * const dentista = await prisma.dentista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dentistas and only return the `id`
     * const dentistaWithIdOnly = await prisma.dentista.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DentistaCreateManyAndReturnArgs>(args?: SelectSubset<T, DentistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dentista.
     * @param {DentistaDeleteArgs} args - Arguments to delete one Dentista.
     * @example
     * // Delete one Dentista
     * const Dentista = await prisma.dentista.delete({
     *   where: {
     *     // ... filter to delete one Dentista
     *   }
     * })
     * 
     */
    delete<T extends DentistaDeleteArgs>(args: SelectSubset<T, DentistaDeleteArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dentista.
     * @param {DentistaUpdateArgs} args - Arguments to update one Dentista.
     * @example
     * // Update one Dentista
     * const dentista = await prisma.dentista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DentistaUpdateArgs>(args: SelectSubset<T, DentistaUpdateArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dentistas.
     * @param {DentistaDeleteManyArgs} args - Arguments to filter Dentistas to delete.
     * @example
     * // Delete a few Dentistas
     * const { count } = await prisma.dentista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DentistaDeleteManyArgs>(args?: SelectSubset<T, DentistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dentistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DentistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dentistas
     * const dentista = await prisma.dentista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DentistaUpdateManyArgs>(args: SelectSubset<T, DentistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dentistas and returns the data updated in the database.
     * @param {DentistaUpdateManyAndReturnArgs} args - Arguments to update many Dentistas.
     * @example
     * // Update many Dentistas
     * const dentista = await prisma.dentista.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dentistas and only return the `id`
     * const dentistaWithIdOnly = await prisma.dentista.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DentistaUpdateManyAndReturnArgs>(args: SelectSubset<T, DentistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dentista.
     * @param {DentistaUpsertArgs} args - Arguments to update or create a Dentista.
     * @example
     * // Update or create a Dentista
     * const dentista = await prisma.dentista.upsert({
     *   create: {
     *     // ... data to create a Dentista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dentista we want to update
     *   }
     * })
     */
    upsert<T extends DentistaUpsertArgs>(args: SelectSubset<T, DentistaUpsertArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dentistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DentistaCountArgs} args - Arguments to filter Dentistas to count.
     * @example
     * // Count the number of Dentistas
     * const count = await prisma.dentista.count({
     *   where: {
     *     // ... the filter for the Dentistas we want to count
     *   }
     * })
    **/
    count<T extends DentistaCountArgs>(
      args?: Subset<T, DentistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DentistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dentista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DentistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DentistaAggregateArgs>(args: Subset<T, DentistaAggregateArgs>): Prisma.PrismaPromise<GetDentistaAggregateType<T>>

    /**
     * Group by Dentista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DentistaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DentistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DentistaGroupByArgs['orderBy'] }
        : { orderBy?: DentistaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DentistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDentistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dentista model
   */
  readonly fields: DentistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dentista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DentistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends Dentista$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, Dentista$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consultas<T extends Dentista$consultasArgs<ExtArgs> = {}>(args?: Subset<T, Dentista$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dentista model
   */
  interface DentistaFieldRefs {
    readonly id: FieldRef<"Dentista", 'Int'>
    readonly cro: FieldRef<"Dentista", 'String'>
    readonly nome: FieldRef<"Dentista", 'String'>
    readonly especialidade: FieldRef<"Dentista", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dentista findUnique
   */
  export type DentistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DentistaInclude<ExtArgs> | null
    /**
     * Filter, which Dentista to fetch.
     */
    where: DentistaWhereUniqueInput
  }

  /**
   * Dentista findUniqueOrThrow
   */
  export type DentistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DentistaInclude<ExtArgs> | null
    /**
     * Filter, which Dentista to fetch.
     */
    where: DentistaWhereUniqueInput
  }

  /**
   * Dentista findFirst
   */
  export type DentistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DentistaInclude<ExtArgs> | null
    /**
     * Filter, which Dentista to fetch.
     */
    where?: DentistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dentistas to fetch.
     */
    orderBy?: DentistaOrderByWithRelationInput | DentistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dentistas.
     */
    cursor?: DentistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dentistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dentistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dentistas.
     */
    distinct?: DentistaScalarFieldEnum | DentistaScalarFieldEnum[]
  }

  /**
   * Dentista findFirstOrThrow
   */
  export type DentistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DentistaInclude<ExtArgs> | null
    /**
     * Filter, which Dentista to fetch.
     */
    where?: DentistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dentistas to fetch.
     */
    orderBy?: DentistaOrderByWithRelationInput | DentistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dentistas.
     */
    cursor?: DentistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dentistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dentistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dentistas.
     */
    distinct?: DentistaScalarFieldEnum | DentistaScalarFieldEnum[]
  }

  /**
   * Dentista findMany
   */
  export type DentistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DentistaInclude<ExtArgs> | null
    /**
     * Filter, which Dentistas to fetch.
     */
    where?: DentistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dentistas to fetch.
     */
    orderBy?: DentistaOrderByWithRelationInput | DentistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dentistas.
     */
    cursor?: DentistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dentistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dentistas.
     */
    skip?: number
    distinct?: DentistaScalarFieldEnum | DentistaScalarFieldEnum[]
  }

  /**
   * Dentista create
   */
  export type DentistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DentistaInclude<ExtArgs> | null
    /**
     * The data needed to create a Dentista.
     */
    data: XOR<DentistaCreateInput, DentistaUncheckedCreateInput>
  }

  /**
   * Dentista createMany
   */
  export type DentistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dentistas.
     */
    data: DentistaCreateManyInput | DentistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dentista createManyAndReturn
   */
  export type DentistaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * The data used to create many Dentistas.
     */
    data: DentistaCreateManyInput | DentistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dentista update
   */
  export type DentistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DentistaInclude<ExtArgs> | null
    /**
     * The data needed to update a Dentista.
     */
    data: XOR<DentistaUpdateInput, DentistaUncheckedUpdateInput>
    /**
     * Choose, which Dentista to update.
     */
    where: DentistaWhereUniqueInput
  }

  /**
   * Dentista updateMany
   */
  export type DentistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dentistas.
     */
    data: XOR<DentistaUpdateManyMutationInput, DentistaUncheckedUpdateManyInput>
    /**
     * Filter which Dentistas to update
     */
    where?: DentistaWhereInput
    /**
     * Limit how many Dentistas to update.
     */
    limit?: number
  }

  /**
   * Dentista updateManyAndReturn
   */
  export type DentistaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * The data used to update Dentistas.
     */
    data: XOR<DentistaUpdateManyMutationInput, DentistaUncheckedUpdateManyInput>
    /**
     * Filter which Dentistas to update
     */
    where?: DentistaWhereInput
    /**
     * Limit how many Dentistas to update.
     */
    limit?: number
  }

  /**
   * Dentista upsert
   */
  export type DentistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DentistaInclude<ExtArgs> | null
    /**
     * The filter to search for the Dentista to update in case it exists.
     */
    where: DentistaWhereUniqueInput
    /**
     * In case the Dentista found by the `where` argument doesn't exist, create a new Dentista with this data.
     */
    create: XOR<DentistaCreateInput, DentistaUncheckedCreateInput>
    /**
     * In case the Dentista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DentistaUpdateInput, DentistaUncheckedUpdateInput>
  }

  /**
   * Dentista delete
   */
  export type DentistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DentistaInclude<ExtArgs> | null
    /**
     * Filter which Dentista to delete.
     */
    where: DentistaWhereUniqueInput
  }

  /**
   * Dentista deleteMany
   */
  export type DentistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dentistas to delete
     */
    where?: DentistaWhereInput
    /**
     * Limit how many Dentistas to delete.
     */
    limit?: number
  }

  /**
   * Dentista.pacientes
   */
  export type Dentista$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Dentista.consultas
   */
  export type Dentista$consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    cursor?: ConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Dentista without action
   */
  export type DentistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DentistaInclude<ExtArgs> | null
  }


  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    id: number | null
    dentistaId: number | null
  }

  export type PacienteSumAggregateOutputType = {
    id: number | null
    dentistaId: number | null
  }

  export type PacienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    cpf: string | null
    telefone: string | null
    dentistaId: number | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    cpf: string | null
    telefone: string | null
    dentistaId: number | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    cpf: number
    telefone: number
    dentistaId: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    id?: true
    dentistaId?: true
  }

  export type PacienteSumAggregateInputType = {
    id?: true
    dentistaId?: true
  }

  export type PacienteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    telefone?: true
    dentistaId?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    telefone?: true
    dentistaId?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    telefone?: true
    dentistaId?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: number
    nome: string
    email: string
    cpf: string
    telefone: string
    dentistaId: number
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    telefone?: boolean
    dentistaId?: boolean
    dentista?: boolean | DentistaDefaultArgs<ExtArgs>
    consultas?: boolean | Paciente$consultasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    telefone?: boolean
    dentistaId?: boolean
    dentista?: boolean | DentistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    telefone?: boolean
    dentistaId?: boolean
    dentista?: boolean | DentistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    telefone?: boolean
    dentistaId?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "cpf" | "telefone" | "dentistaId", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dentista?: boolean | DentistaDefaultArgs<ExtArgs>
    consultas?: boolean | Paciente$consultasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dentista?: boolean | DentistaDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dentista?: boolean | DentistaDefaultArgs<ExtArgs>
  }

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      dentista: Prisma.$DentistaPayload<ExtArgs>
      consultas: Prisma.$ConsultaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      cpf: string
      telefone: string
      dentistaId: number
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacienteCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {PacienteUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PacienteUpdateManyAndReturnArgs>(args: SelectSubset<T, PacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dentista<T extends DentistaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DentistaDefaultArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consultas<T extends Paciente$consultasArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'Int'>
    readonly nome: FieldRef<"Paciente", 'String'>
    readonly email: FieldRef<"Paciente", 'String'>
    readonly cpf: FieldRef<"Paciente", 'String'>
    readonly telefone: FieldRef<"Paciente", 'String'>
    readonly dentistaId: FieldRef<"Paciente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente createManyAndReturn
   */
  export type PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente updateManyAndReturn
   */
  export type PacienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.consultas
   */
  export type Paciente$consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    cursor?: ConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Consulta
   */

  export type AggregateConsulta = {
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  export type ConsultaAvgAggregateOutputType = {
    id: number | null
    dentistaId: number | null
    pacienteId: number | null
  }

  export type ConsultaSumAggregateOutputType = {
    id: number | null
    dentistaId: number | null
    pacienteId: number | null
  }

  export type ConsultaMinAggregateOutputType = {
    id: number | null
    dentistaId: number | null
    pacienteId: number | null
  }

  export type ConsultaMaxAggregateOutputType = {
    id: number | null
    dentistaId: number | null
    pacienteId: number | null
  }

  export type ConsultaCountAggregateOutputType = {
    id: number
    dentistaId: number
    pacienteId: number
    _all: number
  }


  export type ConsultaAvgAggregateInputType = {
    id?: true
    dentistaId?: true
    pacienteId?: true
  }

  export type ConsultaSumAggregateInputType = {
    id?: true
    dentistaId?: true
    pacienteId?: true
  }

  export type ConsultaMinAggregateInputType = {
    id?: true
    dentistaId?: true
    pacienteId?: true
  }

  export type ConsultaMaxAggregateInputType = {
    id?: true
    dentistaId?: true
    pacienteId?: true
  }

  export type ConsultaCountAggregateInputType = {
    id?: true
    dentistaId?: true
    pacienteId?: true
    _all?: true
  }

  export type ConsultaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consulta to aggregate.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultas
    **/
    _count?: true | ConsultaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultaMaxAggregateInputType
  }

  export type GetConsultaAggregateType<T extends ConsultaAggregateArgs> = {
        [P in keyof T & keyof AggregateConsulta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsulta[P]>
      : GetScalarType<T[P], AggregateConsulta[P]>
  }




  export type ConsultaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithAggregationInput | ConsultaOrderByWithAggregationInput[]
    by: ConsultaScalarFieldEnum[] | ConsultaScalarFieldEnum
    having?: ConsultaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultaCountAggregateInputType | true
    _avg?: ConsultaAvgAggregateInputType
    _sum?: ConsultaSumAggregateInputType
    _min?: ConsultaMinAggregateInputType
    _max?: ConsultaMaxAggregateInputType
  }

  export type ConsultaGroupByOutputType = {
    id: number
    dentistaId: number
    pacienteId: number
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  type GetConsultaGroupByPayload<T extends ConsultaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
        }
      >
    >


  export type ConsultaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dentistaId?: boolean
    pacienteId?: boolean
    dentista?: boolean | DentistaDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dentistaId?: boolean
    pacienteId?: boolean
    dentista?: boolean | DentistaDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dentistaId?: boolean
    pacienteId?: boolean
    dentista?: boolean | DentistaDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectScalar = {
    id?: boolean
    dentistaId?: boolean
    pacienteId?: boolean
  }

  export type ConsultaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dentistaId" | "pacienteId", ExtArgs["result"]["consulta"]>
  export type ConsultaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dentista?: boolean | DentistaDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }
  export type ConsultaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dentista?: boolean | DentistaDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }
  export type ConsultaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dentista?: boolean | DentistaDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }

  export type $ConsultaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consulta"
    objects: {
      dentista: Prisma.$DentistaPayload<ExtArgs>
      paciente: Prisma.$PacientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dentistaId: number
      pacienteId: number
    }, ExtArgs["result"]["consulta"]>
    composites: {}
  }

  type ConsultaGetPayload<S extends boolean | null | undefined | ConsultaDefaultArgs> = $Result.GetResult<Prisma.$ConsultaPayload, S>

  type ConsultaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultaCountAggregateInputType | true
    }

  export interface ConsultaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consulta'], meta: { name: 'Consulta' } }
    /**
     * Find zero or one Consulta that matches the filter.
     * @param {ConsultaFindUniqueArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultaFindUniqueArgs>(args: SelectSubset<T, ConsultaFindUniqueArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consulta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultaFindUniqueOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consulta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultaFindFirstArgs>(args?: SelectSubset<T, ConsultaFindFirstArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consulta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultas
     * const consultas = await prisma.consulta.findMany()
     * 
     * // Get first 10 Consultas
     * const consultas = await prisma.consulta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultaWithIdOnly = await prisma.consulta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultaFindManyArgs>(args?: SelectSubset<T, ConsultaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consulta.
     * @param {ConsultaCreateArgs} args - Arguments to create a Consulta.
     * @example
     * // Create one Consulta
     * const Consulta = await prisma.consulta.create({
     *   data: {
     *     // ... data to create a Consulta
     *   }
     * })
     * 
     */
    create<T extends ConsultaCreateArgs>(args: SelectSubset<T, ConsultaCreateArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultas.
     * @param {ConsultaCreateManyArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consulta = await prisma.consulta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultaCreateManyArgs>(args?: SelectSubset<T, ConsultaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultas and returns the data saved in the database.
     * @param {ConsultaCreateManyAndReturnArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consulta = await prisma.consulta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultas and only return the `id`
     * const consultaWithIdOnly = await prisma.consulta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultaCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consulta.
     * @param {ConsultaDeleteArgs} args - Arguments to delete one Consulta.
     * @example
     * // Delete one Consulta
     * const Consulta = await prisma.consulta.delete({
     *   where: {
     *     // ... filter to delete one Consulta
     *   }
     * })
     * 
     */
    delete<T extends ConsultaDeleteArgs>(args: SelectSubset<T, ConsultaDeleteArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consulta.
     * @param {ConsultaUpdateArgs} args - Arguments to update one Consulta.
     * @example
     * // Update one Consulta
     * const consulta = await prisma.consulta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultaUpdateArgs>(args: SelectSubset<T, ConsultaUpdateArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultas.
     * @param {ConsultaDeleteManyArgs} args - Arguments to filter Consultas to delete.
     * @example
     * // Delete a few Consultas
     * const { count } = await prisma.consulta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultaDeleteManyArgs>(args?: SelectSubset<T, ConsultaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultaUpdateManyArgs>(args: SelectSubset<T, ConsultaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas and returns the data updated in the database.
     * @param {ConsultaUpdateManyAndReturnArgs} args - Arguments to update many Consultas.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consultas and only return the `id`
     * const consultaWithIdOnly = await prisma.consulta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultaUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consulta.
     * @param {ConsultaUpsertArgs} args - Arguments to update or create a Consulta.
     * @example
     * // Update or create a Consulta
     * const consulta = await prisma.consulta.upsert({
     *   create: {
     *     // ... data to create a Consulta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consulta we want to update
     *   }
     * })
     */
    upsert<T extends ConsultaUpsertArgs>(args: SelectSubset<T, ConsultaUpsertArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaCountArgs} args - Arguments to filter Consultas to count.
     * @example
     * // Count the number of Consultas
     * const count = await prisma.consulta.count({
     *   where: {
     *     // ... the filter for the Consultas we want to count
     *   }
     * })
    **/
    count<T extends ConsultaCountArgs>(
      args?: Subset<T, ConsultaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultaAggregateArgs>(args: Subset<T, ConsultaAggregateArgs>): Prisma.PrismaPromise<GetConsultaAggregateType<T>>

    /**
     * Group by Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultaGroupByArgs['orderBy'] }
        : { orderBy?: ConsultaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consulta model
   */
  readonly fields: ConsultaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consulta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dentista<T extends DentistaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DentistaDefaultArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consulta model
   */
  interface ConsultaFieldRefs {
    readonly id: FieldRef<"Consulta", 'Int'>
    readonly dentistaId: FieldRef<"Consulta", 'Int'>
    readonly pacienteId: FieldRef<"Consulta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Consulta findUnique
   */
  export type ConsultaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta findUniqueOrThrow
   */
  export type ConsultaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta findFirst
   */
  export type ConsultaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta findFirstOrThrow
   */
  export type ConsultaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta findMany
   */
  export type ConsultaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consultas to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta create
   */
  export type ConsultaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to create a Consulta.
     */
    data: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
  }

  /**
   * Consulta createMany
   */
  export type ConsultaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultas.
     */
    data: ConsultaCreateManyInput | ConsultaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consulta createManyAndReturn
   */
  export type ConsultaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * The data used to create many Consultas.
     */
    data: ConsultaCreateManyInput | ConsultaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consulta update
   */
  export type ConsultaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to update a Consulta.
     */
    data: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
    /**
     * Choose, which Consulta to update.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta updateMany
   */
  export type ConsultaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to update.
     */
    limit?: number
  }

  /**
   * Consulta updateManyAndReturn
   */
  export type ConsultaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consulta upsert
   */
  export type ConsultaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The filter to search for the Consulta to update in case it exists.
     */
    where: ConsultaWhereUniqueInput
    /**
     * In case the Consulta found by the `where` argument doesn't exist, create a new Consulta with this data.
     */
    create: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
    /**
     * In case the Consulta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
  }

  /**
   * Consulta delete
   */
  export type ConsultaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter which Consulta to delete.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta deleteMany
   */
  export type ConsultaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultas to delete
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to delete.
     */
    limit?: number
  }

  /**
   * Consulta without action
   */
  export type ConsultaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SecretarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    idade: 'idade'
  };

  export type SecretarioScalarFieldEnum = (typeof SecretarioScalarFieldEnum)[keyof typeof SecretarioScalarFieldEnum]


  export const DentistaScalarFieldEnum: {
    id: 'id',
    cro: 'cro',
    nome: 'nome',
    especialidade: 'especialidade'
  };

  export type DentistaScalarFieldEnum = (typeof DentistaScalarFieldEnum)[keyof typeof DentistaScalarFieldEnum]


  export const PacienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    cpf: 'cpf',
    telefone: 'telefone',
    dentistaId: 'dentistaId'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const ConsultaScalarFieldEnum: {
    id: 'id',
    dentistaId: 'dentistaId',
    pacienteId: 'pacienteId'
  };

  export type ConsultaScalarFieldEnum = (typeof ConsultaScalarFieldEnum)[keyof typeof ConsultaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SecretarioWhereInput = {
    AND?: SecretarioWhereInput | SecretarioWhereInput[]
    OR?: SecretarioWhereInput[]
    NOT?: SecretarioWhereInput | SecretarioWhereInput[]
    id?: IntFilter<"Secretario"> | number
    nome?: StringFilter<"Secretario"> | string
    idade?: IntFilter<"Secretario"> | number
  }

  export type SecretarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
  }

  export type SecretarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SecretarioWhereInput | SecretarioWhereInput[]
    OR?: SecretarioWhereInput[]
    NOT?: SecretarioWhereInput | SecretarioWhereInput[]
    nome?: StringFilter<"Secretario"> | string
    idade?: IntFilter<"Secretario"> | number
  }, "id">

  export type SecretarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    _count?: SecretarioCountOrderByAggregateInput
    _avg?: SecretarioAvgOrderByAggregateInput
    _max?: SecretarioMaxOrderByAggregateInput
    _min?: SecretarioMinOrderByAggregateInput
    _sum?: SecretarioSumOrderByAggregateInput
  }

  export type SecretarioScalarWhereWithAggregatesInput = {
    AND?: SecretarioScalarWhereWithAggregatesInput | SecretarioScalarWhereWithAggregatesInput[]
    OR?: SecretarioScalarWhereWithAggregatesInput[]
    NOT?: SecretarioScalarWhereWithAggregatesInput | SecretarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Secretario"> | number
    nome?: StringWithAggregatesFilter<"Secretario"> | string
    idade?: IntWithAggregatesFilter<"Secretario"> | number
  }

  export type DentistaWhereInput = {
    AND?: DentistaWhereInput | DentistaWhereInput[]
    OR?: DentistaWhereInput[]
    NOT?: DentistaWhereInput | DentistaWhereInput[]
    id?: IntFilter<"Dentista"> | number
    cro?: StringFilter<"Dentista"> | string
    nome?: StringFilter<"Dentista"> | string
    especialidade?: StringFilter<"Dentista"> | string
    pacientes?: PacienteListRelationFilter
    consultas?: ConsultaListRelationFilter
  }

  export type DentistaOrderByWithRelationInput = {
    id?: SortOrder
    cro?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
    pacientes?: PacienteOrderByRelationAggregateInput
    consultas?: ConsultaOrderByRelationAggregateInput
  }

  export type DentistaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cro?: string
    AND?: DentistaWhereInput | DentistaWhereInput[]
    OR?: DentistaWhereInput[]
    NOT?: DentistaWhereInput | DentistaWhereInput[]
    nome?: StringFilter<"Dentista"> | string
    especialidade?: StringFilter<"Dentista"> | string
    pacientes?: PacienteListRelationFilter
    consultas?: ConsultaListRelationFilter
  }, "id" | "cro">

  export type DentistaOrderByWithAggregationInput = {
    id?: SortOrder
    cro?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
    _count?: DentistaCountOrderByAggregateInput
    _avg?: DentistaAvgOrderByAggregateInput
    _max?: DentistaMaxOrderByAggregateInput
    _min?: DentistaMinOrderByAggregateInput
    _sum?: DentistaSumOrderByAggregateInput
  }

  export type DentistaScalarWhereWithAggregatesInput = {
    AND?: DentistaScalarWhereWithAggregatesInput | DentistaScalarWhereWithAggregatesInput[]
    OR?: DentistaScalarWhereWithAggregatesInput[]
    NOT?: DentistaScalarWhereWithAggregatesInput | DentistaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dentista"> | number
    cro?: StringWithAggregatesFilter<"Dentista"> | string
    nome?: StringWithAggregatesFilter<"Dentista"> | string
    especialidade?: StringWithAggregatesFilter<"Dentista"> | string
  }

  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: IntFilter<"Paciente"> | number
    nome?: StringFilter<"Paciente"> | string
    email?: StringFilter<"Paciente"> | string
    cpf?: StringFilter<"Paciente"> | string
    telefone?: StringFilter<"Paciente"> | string
    dentistaId?: IntFilter<"Paciente"> | number
    dentista?: XOR<DentistaScalarRelationFilter, DentistaWhereInput>
    consultas?: ConsultaListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    dentistaId?: SortOrder
    dentista?: DentistaOrderByWithRelationInput
    consultas?: ConsultaOrderByRelationAggregateInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    nome?: StringFilter<"Paciente"> | string
    email?: StringFilter<"Paciente"> | string
    telefone?: StringFilter<"Paciente"> | string
    dentistaId?: IntFilter<"Paciente"> | number
    dentista?: XOR<DentistaScalarRelationFilter, DentistaWhereInput>
    consultas?: ConsultaListRelationFilter
  }, "id" | "cpf">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    dentistaId?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paciente"> | number
    nome?: StringWithAggregatesFilter<"Paciente"> | string
    email?: StringWithAggregatesFilter<"Paciente"> | string
    cpf?: StringWithAggregatesFilter<"Paciente"> | string
    telefone?: StringWithAggregatesFilter<"Paciente"> | string
    dentistaId?: IntWithAggregatesFilter<"Paciente"> | number
  }

  export type ConsultaWhereInput = {
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    id?: IntFilter<"Consulta"> | number
    dentistaId?: IntFilter<"Consulta"> | number
    pacienteId?: IntFilter<"Consulta"> | number
    dentista?: XOR<DentistaScalarRelationFilter, DentistaWhereInput>
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }

  export type ConsultaOrderByWithRelationInput = {
    id?: SortOrder
    dentistaId?: SortOrder
    pacienteId?: SortOrder
    dentista?: DentistaOrderByWithRelationInput
    paciente?: PacienteOrderByWithRelationInput
  }

  export type ConsultaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    dentistaId?: IntFilter<"Consulta"> | number
    pacienteId?: IntFilter<"Consulta"> | number
    dentista?: XOR<DentistaScalarRelationFilter, DentistaWhereInput>
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }, "id">

  export type ConsultaOrderByWithAggregationInput = {
    id?: SortOrder
    dentistaId?: SortOrder
    pacienteId?: SortOrder
    _count?: ConsultaCountOrderByAggregateInput
    _avg?: ConsultaAvgOrderByAggregateInput
    _max?: ConsultaMaxOrderByAggregateInput
    _min?: ConsultaMinOrderByAggregateInput
    _sum?: ConsultaSumOrderByAggregateInput
  }

  export type ConsultaScalarWhereWithAggregatesInput = {
    AND?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    OR?: ConsultaScalarWhereWithAggregatesInput[]
    NOT?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Consulta"> | number
    dentistaId?: IntWithAggregatesFilter<"Consulta"> | number
    pacienteId?: IntWithAggregatesFilter<"Consulta"> | number
  }

  export type SecretarioCreateInput = {
    nome: string
    idade: number
  }

  export type SecretarioUncheckedCreateInput = {
    id?: number
    nome: string
    idade: number
  }

  export type SecretarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
  }

  export type SecretarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
  }

  export type SecretarioCreateManyInput = {
    id?: number
    nome: string
    idade: number
  }

  export type SecretarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
  }

  export type SecretarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
  }

  export type DentistaCreateInput = {
    cro: string
    nome: string
    especialidade: string
    pacientes?: PacienteCreateNestedManyWithoutDentistaInput
    consultas?: ConsultaCreateNestedManyWithoutDentistaInput
  }

  export type DentistaUncheckedCreateInput = {
    id?: number
    cro: string
    nome: string
    especialidade: string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutDentistaInput
    consultas?: ConsultaUncheckedCreateNestedManyWithoutDentistaInput
  }

  export type DentistaUpdateInput = {
    cro?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUpdateManyWithoutDentistaNestedInput
    consultas?: ConsultaUpdateManyWithoutDentistaNestedInput
  }

  export type DentistaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cro?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUncheckedUpdateManyWithoutDentistaNestedInput
    consultas?: ConsultaUncheckedUpdateManyWithoutDentistaNestedInput
  }

  export type DentistaCreateManyInput = {
    id?: number
    cro: string
    nome: string
    especialidade: string
  }

  export type DentistaUpdateManyMutationInput = {
    cro?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type DentistaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cro?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteCreateInput = {
    nome: string
    email: string
    cpf: string
    telefone: string
    dentista: DentistaCreateNestedOneWithoutPacientesInput
    consultas?: ConsultaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    telefone: string
    dentistaId: number
    consultas?: ConsultaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    dentista?: DentistaUpdateOneRequiredWithoutPacientesNestedInput
    consultas?: ConsultaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    dentistaId?: IntFieldUpdateOperationsInput | number
    consultas?: ConsultaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    telefone: string
    dentistaId: number
  }

  export type PacienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    dentistaId?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultaCreateInput = {
    dentista: DentistaCreateNestedOneWithoutConsultasInput
    paciente: PacienteCreateNestedOneWithoutConsultasInput
  }

  export type ConsultaUncheckedCreateInput = {
    id?: number
    dentistaId: number
    pacienteId: number
  }

  export type ConsultaUpdateInput = {
    dentista?: DentistaUpdateOneRequiredWithoutConsultasNestedInput
    paciente?: PacienteUpdateOneRequiredWithoutConsultasNestedInput
  }

  export type ConsultaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dentistaId?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultaCreateManyInput = {
    id?: number
    dentistaId: number
    pacienteId: number
  }

  export type ConsultaUpdateManyMutationInput = {

  }

  export type ConsultaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dentistaId?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SecretarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
  }

  export type SecretarioAvgOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
  }

  export type SecretarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
  }

  export type SecretarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
  }

  export type SecretarioSumOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PacienteListRelationFilter = {
    every?: PacienteWhereInput
    some?: PacienteWhereInput
    none?: PacienteWhereInput
  }

  export type ConsultaListRelationFilter = {
    every?: ConsultaWhereInput
    some?: ConsultaWhereInput
    none?: ConsultaWhereInput
  }

  export type PacienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DentistaCountOrderByAggregateInput = {
    id?: SortOrder
    cro?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
  }

  export type DentistaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DentistaMaxOrderByAggregateInput = {
    id?: SortOrder
    cro?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
  }

  export type DentistaMinOrderByAggregateInput = {
    id?: SortOrder
    cro?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
  }

  export type DentistaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DentistaScalarRelationFilter = {
    is?: DentistaWhereInput
    isNot?: DentistaWhereInput
  }

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    dentistaId?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    id?: SortOrder
    dentistaId?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    dentistaId?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    dentistaId?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    id?: SortOrder
    dentistaId?: SortOrder
  }

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type ConsultaCountOrderByAggregateInput = {
    id?: SortOrder
    dentistaId?: SortOrder
    pacienteId?: SortOrder
  }

  export type ConsultaAvgOrderByAggregateInput = {
    id?: SortOrder
    dentistaId?: SortOrder
    pacienteId?: SortOrder
  }

  export type ConsultaMaxOrderByAggregateInput = {
    id?: SortOrder
    dentistaId?: SortOrder
    pacienteId?: SortOrder
  }

  export type ConsultaMinOrderByAggregateInput = {
    id?: SortOrder
    dentistaId?: SortOrder
    pacienteId?: SortOrder
  }

  export type ConsultaSumOrderByAggregateInput = {
    id?: SortOrder
    dentistaId?: SortOrder
    pacienteId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PacienteCreateNestedManyWithoutDentistaInput = {
    create?: XOR<PacienteCreateWithoutDentistaInput, PacienteUncheckedCreateWithoutDentistaInput> | PacienteCreateWithoutDentistaInput[] | PacienteUncheckedCreateWithoutDentistaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutDentistaInput | PacienteCreateOrConnectWithoutDentistaInput[]
    createMany?: PacienteCreateManyDentistaInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ConsultaCreateNestedManyWithoutDentistaInput = {
    create?: XOR<ConsultaCreateWithoutDentistaInput, ConsultaUncheckedCreateWithoutDentistaInput> | ConsultaCreateWithoutDentistaInput[] | ConsultaUncheckedCreateWithoutDentistaInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutDentistaInput | ConsultaCreateOrConnectWithoutDentistaInput[]
    createMany?: ConsultaCreateManyDentistaInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutDentistaInput = {
    create?: XOR<PacienteCreateWithoutDentistaInput, PacienteUncheckedCreateWithoutDentistaInput> | PacienteCreateWithoutDentistaInput[] | PacienteUncheckedCreateWithoutDentistaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutDentistaInput | PacienteCreateOrConnectWithoutDentistaInput[]
    createMany?: PacienteCreateManyDentistaInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ConsultaUncheckedCreateNestedManyWithoutDentistaInput = {
    create?: XOR<ConsultaCreateWithoutDentistaInput, ConsultaUncheckedCreateWithoutDentistaInput> | ConsultaCreateWithoutDentistaInput[] | ConsultaUncheckedCreateWithoutDentistaInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutDentistaInput | ConsultaCreateOrConnectWithoutDentistaInput[]
    createMany?: ConsultaCreateManyDentistaInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type PacienteUpdateManyWithoutDentistaNestedInput = {
    create?: XOR<PacienteCreateWithoutDentistaInput, PacienteUncheckedCreateWithoutDentistaInput> | PacienteCreateWithoutDentistaInput[] | PacienteUncheckedCreateWithoutDentistaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutDentistaInput | PacienteCreateOrConnectWithoutDentistaInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutDentistaInput | PacienteUpsertWithWhereUniqueWithoutDentistaInput[]
    createMany?: PacienteCreateManyDentistaInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutDentistaInput | PacienteUpdateWithWhereUniqueWithoutDentistaInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutDentistaInput | PacienteUpdateManyWithWhereWithoutDentistaInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ConsultaUpdateManyWithoutDentistaNestedInput = {
    create?: XOR<ConsultaCreateWithoutDentistaInput, ConsultaUncheckedCreateWithoutDentistaInput> | ConsultaCreateWithoutDentistaInput[] | ConsultaUncheckedCreateWithoutDentistaInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutDentistaInput | ConsultaCreateOrConnectWithoutDentistaInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutDentistaInput | ConsultaUpsertWithWhereUniqueWithoutDentistaInput[]
    createMany?: ConsultaCreateManyDentistaInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutDentistaInput | ConsultaUpdateWithWhereUniqueWithoutDentistaInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutDentistaInput | ConsultaUpdateManyWithWhereWithoutDentistaInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutDentistaNestedInput = {
    create?: XOR<PacienteCreateWithoutDentistaInput, PacienteUncheckedCreateWithoutDentistaInput> | PacienteCreateWithoutDentistaInput[] | PacienteUncheckedCreateWithoutDentistaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutDentistaInput | PacienteCreateOrConnectWithoutDentistaInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutDentistaInput | PacienteUpsertWithWhereUniqueWithoutDentistaInput[]
    createMany?: PacienteCreateManyDentistaInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutDentistaInput | PacienteUpdateWithWhereUniqueWithoutDentistaInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutDentistaInput | PacienteUpdateManyWithWhereWithoutDentistaInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ConsultaUncheckedUpdateManyWithoutDentistaNestedInput = {
    create?: XOR<ConsultaCreateWithoutDentistaInput, ConsultaUncheckedCreateWithoutDentistaInput> | ConsultaCreateWithoutDentistaInput[] | ConsultaUncheckedCreateWithoutDentistaInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutDentistaInput | ConsultaCreateOrConnectWithoutDentistaInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutDentistaInput | ConsultaUpsertWithWhereUniqueWithoutDentistaInput[]
    createMany?: ConsultaCreateManyDentistaInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutDentistaInput | ConsultaUpdateWithWhereUniqueWithoutDentistaInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutDentistaInput | ConsultaUpdateManyWithWhereWithoutDentistaInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type DentistaCreateNestedOneWithoutPacientesInput = {
    create?: XOR<DentistaCreateWithoutPacientesInput, DentistaUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: DentistaCreateOrConnectWithoutPacientesInput
    connect?: DentistaWhereUniqueInput
  }

  export type ConsultaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type ConsultaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type DentistaUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<DentistaCreateWithoutPacientesInput, DentistaUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: DentistaCreateOrConnectWithoutPacientesInput
    upsert?: DentistaUpsertWithoutPacientesInput
    connect?: DentistaWhereUniqueInput
    update?: XOR<XOR<DentistaUpdateToOneWithWhereWithoutPacientesInput, DentistaUpdateWithoutPacientesInput>, DentistaUncheckedUpdateWithoutPacientesInput>
  }

  export type ConsultaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutPacienteInput | ConsultaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutPacienteInput | ConsultaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutPacienteInput | ConsultaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type ConsultaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutPacienteInput | ConsultaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutPacienteInput | ConsultaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutPacienteInput | ConsultaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type DentistaCreateNestedOneWithoutConsultasInput = {
    create?: XOR<DentistaCreateWithoutConsultasInput, DentistaUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: DentistaCreateOrConnectWithoutConsultasInput
    connect?: DentistaWhereUniqueInput
  }

  export type PacienteCreateNestedOneWithoutConsultasInput = {
    create?: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutConsultasInput
    connect?: PacienteWhereUniqueInput
  }

  export type DentistaUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: XOR<DentistaCreateWithoutConsultasInput, DentistaUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: DentistaCreateOrConnectWithoutConsultasInput
    upsert?: DentistaUpsertWithoutConsultasInput
    connect?: DentistaWhereUniqueInput
    update?: XOR<XOR<DentistaUpdateToOneWithWhereWithoutConsultasInput, DentistaUpdateWithoutConsultasInput>, DentistaUncheckedUpdateWithoutConsultasInput>
  }

  export type PacienteUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutConsultasInput
    upsert?: PacienteUpsertWithoutConsultasInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutConsultasInput, PacienteUpdateWithoutConsultasInput>, PacienteUncheckedUpdateWithoutConsultasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PacienteCreateWithoutDentistaInput = {
    nome: string
    email: string
    cpf: string
    telefone: string
    consultas?: ConsultaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutDentistaInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    telefone: string
    consultas?: ConsultaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutDentistaInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutDentistaInput, PacienteUncheckedCreateWithoutDentistaInput>
  }

  export type PacienteCreateManyDentistaInputEnvelope = {
    data: PacienteCreateManyDentistaInput | PacienteCreateManyDentistaInput[]
    skipDuplicates?: boolean
  }

  export type ConsultaCreateWithoutDentistaInput = {
    paciente: PacienteCreateNestedOneWithoutConsultasInput
  }

  export type ConsultaUncheckedCreateWithoutDentistaInput = {
    id?: number
    pacienteId: number
  }

  export type ConsultaCreateOrConnectWithoutDentistaInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutDentistaInput, ConsultaUncheckedCreateWithoutDentistaInput>
  }

  export type ConsultaCreateManyDentistaInputEnvelope = {
    data: ConsultaCreateManyDentistaInput | ConsultaCreateManyDentistaInput[]
    skipDuplicates?: boolean
  }

  export type PacienteUpsertWithWhereUniqueWithoutDentistaInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutDentistaInput, PacienteUncheckedUpdateWithoutDentistaInput>
    create: XOR<PacienteCreateWithoutDentistaInput, PacienteUncheckedCreateWithoutDentistaInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutDentistaInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutDentistaInput, PacienteUncheckedUpdateWithoutDentistaInput>
  }

  export type PacienteUpdateManyWithWhereWithoutDentistaInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutDentistaInput>
  }

  export type PacienteScalarWhereInput = {
    AND?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    OR?: PacienteScalarWhereInput[]
    NOT?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    id?: IntFilter<"Paciente"> | number
    nome?: StringFilter<"Paciente"> | string
    email?: StringFilter<"Paciente"> | string
    cpf?: StringFilter<"Paciente"> | string
    telefone?: StringFilter<"Paciente"> | string
    dentistaId?: IntFilter<"Paciente"> | number
  }

  export type ConsultaUpsertWithWhereUniqueWithoutDentistaInput = {
    where: ConsultaWhereUniqueInput
    update: XOR<ConsultaUpdateWithoutDentistaInput, ConsultaUncheckedUpdateWithoutDentistaInput>
    create: XOR<ConsultaCreateWithoutDentistaInput, ConsultaUncheckedCreateWithoutDentistaInput>
  }

  export type ConsultaUpdateWithWhereUniqueWithoutDentistaInput = {
    where: ConsultaWhereUniqueInput
    data: XOR<ConsultaUpdateWithoutDentistaInput, ConsultaUncheckedUpdateWithoutDentistaInput>
  }

  export type ConsultaUpdateManyWithWhereWithoutDentistaInput = {
    where: ConsultaScalarWhereInput
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyWithoutDentistaInput>
  }

  export type ConsultaScalarWhereInput = {
    AND?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    OR?: ConsultaScalarWhereInput[]
    NOT?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    id?: IntFilter<"Consulta"> | number
    dentistaId?: IntFilter<"Consulta"> | number
    pacienteId?: IntFilter<"Consulta"> | number
  }

  export type DentistaCreateWithoutPacientesInput = {
    cro: string
    nome: string
    especialidade: string
    consultas?: ConsultaCreateNestedManyWithoutDentistaInput
  }

  export type DentistaUncheckedCreateWithoutPacientesInput = {
    id?: number
    cro: string
    nome: string
    especialidade: string
    consultas?: ConsultaUncheckedCreateNestedManyWithoutDentistaInput
  }

  export type DentistaCreateOrConnectWithoutPacientesInput = {
    where: DentistaWhereUniqueInput
    create: XOR<DentistaCreateWithoutPacientesInput, DentistaUncheckedCreateWithoutPacientesInput>
  }

  export type ConsultaCreateWithoutPacienteInput = {
    dentista: DentistaCreateNestedOneWithoutConsultasInput
  }

  export type ConsultaUncheckedCreateWithoutPacienteInput = {
    id?: number
    dentistaId: number
  }

  export type ConsultaCreateOrConnectWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
  }

  export type ConsultaCreateManyPacienteInputEnvelope = {
    data: ConsultaCreateManyPacienteInput | ConsultaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type DentistaUpsertWithoutPacientesInput = {
    update: XOR<DentistaUpdateWithoutPacientesInput, DentistaUncheckedUpdateWithoutPacientesInput>
    create: XOR<DentistaCreateWithoutPacientesInput, DentistaUncheckedCreateWithoutPacientesInput>
    where?: DentistaWhereInput
  }

  export type DentistaUpdateToOneWithWhereWithoutPacientesInput = {
    where?: DentistaWhereInput
    data: XOR<DentistaUpdateWithoutPacientesInput, DentistaUncheckedUpdateWithoutPacientesInput>
  }

  export type DentistaUpdateWithoutPacientesInput = {
    cro?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    consultas?: ConsultaUpdateManyWithoutDentistaNestedInput
  }

  export type DentistaUncheckedUpdateWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cro?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    consultas?: ConsultaUncheckedUpdateManyWithoutDentistaNestedInput
  }

  export type ConsultaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    update: XOR<ConsultaUpdateWithoutPacienteInput, ConsultaUncheckedUpdateWithoutPacienteInput>
    create: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
  }

  export type ConsultaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    data: XOR<ConsultaUpdateWithoutPacienteInput, ConsultaUncheckedUpdateWithoutPacienteInput>
  }

  export type ConsultaUpdateManyWithWhereWithoutPacienteInput = {
    where: ConsultaScalarWhereInput
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type DentistaCreateWithoutConsultasInput = {
    cro: string
    nome: string
    especialidade: string
    pacientes?: PacienteCreateNestedManyWithoutDentistaInput
  }

  export type DentistaUncheckedCreateWithoutConsultasInput = {
    id?: number
    cro: string
    nome: string
    especialidade: string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutDentistaInput
  }

  export type DentistaCreateOrConnectWithoutConsultasInput = {
    where: DentistaWhereUniqueInput
    create: XOR<DentistaCreateWithoutConsultasInput, DentistaUncheckedCreateWithoutConsultasInput>
  }

  export type PacienteCreateWithoutConsultasInput = {
    nome: string
    email: string
    cpf: string
    telefone: string
    dentista: DentistaCreateNestedOneWithoutPacientesInput
  }

  export type PacienteUncheckedCreateWithoutConsultasInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    telefone: string
    dentistaId: number
  }

  export type PacienteCreateOrConnectWithoutConsultasInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
  }

  export type DentistaUpsertWithoutConsultasInput = {
    update: XOR<DentistaUpdateWithoutConsultasInput, DentistaUncheckedUpdateWithoutConsultasInput>
    create: XOR<DentistaCreateWithoutConsultasInput, DentistaUncheckedCreateWithoutConsultasInput>
    where?: DentistaWhereInput
  }

  export type DentistaUpdateToOneWithWhereWithoutConsultasInput = {
    where?: DentistaWhereInput
    data: XOR<DentistaUpdateWithoutConsultasInput, DentistaUncheckedUpdateWithoutConsultasInput>
  }

  export type DentistaUpdateWithoutConsultasInput = {
    cro?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUpdateManyWithoutDentistaNestedInput
  }

  export type DentistaUncheckedUpdateWithoutConsultasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cro?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUncheckedUpdateManyWithoutDentistaNestedInput
  }

  export type PacienteUpsertWithoutConsultasInput = {
    update: XOR<PacienteUpdateWithoutConsultasInput, PacienteUncheckedUpdateWithoutConsultasInput>
    create: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutConsultasInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutConsultasInput, PacienteUncheckedUpdateWithoutConsultasInput>
  }

  export type PacienteUpdateWithoutConsultasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    dentista?: DentistaUpdateOneRequiredWithoutPacientesNestedInput
  }

  export type PacienteUncheckedUpdateWithoutConsultasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    dentistaId?: IntFieldUpdateOperationsInput | number
  }

  export type PacienteCreateManyDentistaInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    telefone: string
  }

  export type ConsultaCreateManyDentistaInput = {
    id?: number
    pacienteId: number
  }

  export type PacienteUpdateWithoutDentistaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    consultas?: ConsultaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutDentistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    consultas?: ConsultaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutDentistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultaUpdateWithoutDentistaInput = {
    paciente?: PacienteUpdateOneRequiredWithoutConsultasNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutDentistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultaUncheckedUpdateManyWithoutDentistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultaCreateManyPacienteInput = {
    id?: number
    dentistaId: number
  }

  export type ConsultaUpdateWithoutPacienteInput = {
    dentista?: DentistaUpdateOneRequiredWithoutConsultasNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    dentistaId?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultaUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    dentistaId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}