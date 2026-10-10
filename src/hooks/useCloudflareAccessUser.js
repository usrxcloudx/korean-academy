import { useState, useEffect } from 'react';

export function useCloudflareAccessUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/cdn-cgi/access/get-identity')
      .then(res => {
        if (res.ok) return res.json();
        return null;
      })
      .then(data => {
        if (data && (data.user_email || data.email)) {
          setUser({
            email: data.user_email || data.email,
            name: data.name || (data.user_email ? data.user_email.split('@')[0] : 'Học viên'),
            id: data.user_uuid || data.id,
            groups: data.groups || []
          });
        }
      })
      .catch(() => {
        // Fallback for local development or non-access environment
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const logoutUrl = 'https://aixfactory.cloudflareaccess.com/cdn-cgi/access/logout';

  return { user, loading, logoutUrl };
}
