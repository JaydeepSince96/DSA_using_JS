//1 Partial<T>
// Makes all properties optional.

type user = {
  id: number;
  name: string;
  email: string;
};

type UpdateUser = Partial<user>;

// Can update just one field
const userUpdate: UpdateUser = {
  name: "Jaydeep",
};

//2)  Required<T> Makes all properties required, even if originally optional.

type Settings = {
  theme?: string;
  notifications?: boolean;
};

type EnforcedSettings = Required<Settings>;

const fullSettings: EnforcedSettings = {
  theme: "dark",
  notifications: true,
};

// 3) Readonly<T> Makes all properties immutable (like const at the object level).

type Cars = {
  model: string;
  year: number;
};

const car: Readonly<Cars> = {
  model: "Tesla",
  year: 2024,
};

// car.year = 2025; ❌ Cannot assign to 'year' because it is a read-only property.

// 4) 4. Pick<T, K>  Pick a subset of properties from a type.

type Userva = {
  id: number;
  name: string;
  email: string;
};

type PublicUser = Pick<Userva, "id" | "name">;

const viewUser: PublicUser = {
  id: 1,
  name: "Jaydeep",
};

// 5) 5. Omit<T, K> The inverse of Pick — exclude certain properties.

type Admin = Omit<User, "email">;

const admin: Admin = {
  id: 2,
  name: "SuperAdmin",
};

// 6) 6. Record<K, T> Constructs a type with keys K and values T.

type Roles = "admin" | "user" | "guest";
type Permission = Record<Roles, boolean>;

const accessControl: Permission = {
  admin: true,
  user: true,
  guest: false,
};

// 7)  Exclude<T, U> Exclude types from a union.

type Status = "success" | "error" | "loading";

type NonLoadingStatus = Exclude<Status, "loading">;
// "success" | "error"
