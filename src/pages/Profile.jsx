import axios from 'axios';
import { useState, useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    bio: '',
    location: '',
    birth_date: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get('http://localhost:8000/api/profile/', {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      });
      setProfile(response.data);
    };
    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    await axios.put('http://localhost:8000/api/profile/', profile, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    });
  };

  return (
    <div>
      <h2>Profile</h2>
      <input
        type="text"
        value={profile.bio}
        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
        placeholder="Bio"
      />
      <input
        type="text"
        value={profile.location}
        onChange={(e) => setProfile({ ...profile, location: e.target.value })}
        placeholder="Location"
      />
      <input
        type="date"
        value={profile.birth_date}
        onChange={(e) => setProfile({ ...profile, birth_date: e.target.value })}
      />
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default Profile;
