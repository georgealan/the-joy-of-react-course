function Avatar({ src, alt }) {
  return (
    <button className="avatar-btn">
      <img 
        className="avatar"
        src={src}
        alt={alt}
      />
    </button>
  )
}

export default Avatar