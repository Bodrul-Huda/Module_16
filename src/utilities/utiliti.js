export async function BrandList() {
  const res = await fetch(process.env.BASE_URL + "BrandList");

  if (!res.ok) {
    throw new Error("BrandList Calling Fail");
  }

  return res.json();
}

export async function HeroList() {
  const res = await fetch(process.env.BASE_URL + "HeroList");

  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }

  return res.json();
}

export async function WorkListData() {
  const res = await fetch(process.env.BASE_URL + "WorkList");

  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }

  return res.json();
}

export async function StatList() {
  const res = await fetch(process.env.BASE_URL + "StatList");

  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }

  return res.json();
}
export async function FeaturedProj() {
  const res = await fetch(process.env.BASE_URL + "FeaturedProject");

  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }

  return res.json();
}
export async function TeamList() {
  const res = await fetch(process.env.BASE_URL + "TeamList");

  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }

  return res.json();
}
export async function AllService() {
  const res = await fetch(process.env.BASE_URL + "AllService");

  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }

  return res.json();
}
export async function AllProj() {
  const res = await fetch(process.env.BASE_URL + "AllProject");

  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }

  return res.json();
}
export async function TestimonialList() {
  const res = await fetch(process.env.BASE_URL + "TestimonialList");

  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }

  return res.json();
}
export async function SiteMeta() {
  const res = await fetch(process.env.BASE_URL + "SiteMeta/home");

  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }

  return res.json();
}
