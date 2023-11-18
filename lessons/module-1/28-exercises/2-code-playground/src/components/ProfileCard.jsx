// GOAL:
// Render an unordered list with the class
// “badge-list” when the user has at least
// 1 badge.
//
// Each badge is an object with this shape:
// { slug: string, label: string }
//
// STRETCH:
// If the user has 3+ badges, the “golden”
// class should be added to the unordered
// list (in addition to “badge-list”).

function ProfileCard({ profile }) {
  const numberOfBadges = profile.badges.length

  return (
    <article className="profile-card">
      <header>
        <img
          alt={profile.imageAlt}
          src={profile.imageSrc}
        />

        <h2>{profile.name}</h2>
        <p className="joined">
          Joined {profile.joinDate}
        </p>
      </header>

      {numberOfBadges > 0 && (
      <ul className={numberOfBadges >= 3 ? 'golden badge-list' : 'badge-list'}>
        {profile.badges.map(({ slug, label }) => (
          <li key={slug}>{label}</li>
        ))}
      </ul>)}
    </article>
  )
}

export default ProfileCard