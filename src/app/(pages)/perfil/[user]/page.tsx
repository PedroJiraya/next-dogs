type UserPageType = {
  params: Promise<{
    user: string;
  }>;
};

export default async function UserPage({ params }: UserPageType) {

    const {user} = await(params)

  return <div>UserPage user:{user}</div>;
}
