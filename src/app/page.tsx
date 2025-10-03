"use client";

import { useEffect, useState } from "react";
import { useInitData } from "@telegram-apps/sdk-react";
import { Card, Button } from "@telegram-apps/telegram-ui";

export default function HomePage() {
  const initData = useInitData();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (initData?.user) {
      setUser(initData.user);
    }
  }, [initData]);

  return (
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">🚀 VuzHelper</h1>
        {user ? (
            <Card className="p-4 mb-4">
              <p>👤 <b>{user.first_name}</b></p>
              {user.username && <p>@{user.username}</p>}
              <p>ID: {user.id}</p>
            </Card>
        ) : (
            <p>Ожидание данных от Telegram...</p>
        )}
        <Button size="l" mode="filled">Дальше</Button>
      </main>
  );
}
