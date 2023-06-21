const MediaOption = ({ openMediaOption }) => {
  return (
    <div
      className={`z-10 absolute bottom-16 w-[10%] h-[30%] p-1.5 overflow-hidden ${
        openMediaOption ? "block" : "hidden"
      }`}
    >
      <ul className="flex flex-col-reverse items-center">
        <li className="mt-2 relative opacity-1">
          <button
            style={{
              opacity: 1,
              transform: "translateY(0%) scaleX(1) scaleY(1)",
            }}
          >
            <span>
              <svg
                viewBox="0 0 53 53"
                height={53}
                width={53}
                preserveAspectRatio="xMidYMid meet"
                className=""
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 53 53"
                xmlSpace="preserve"
              >
                <g>
                  <defs>
                    <circle id="image-SVGID_1_" cx="26.5" cy="26.5" r="25.5" />
                  </defs>
                  <clipPath id="image-SVGID_2_">
                    <use xlinkHref="#image-SVGID_1_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#image-SVGID_2_)">
                    <path
                      fill="#AC44CF"
                      d="M26.5-1.1C11.9-1.1-1.1,5.6-1.1,27.6h55.2C54,8.6,41.1-1.1,26.5-1.1z"
                    />
                    <path
                      fill="#BF59CF"
                      d="M53,26.5H-1.1c0,14.6,13,27.6,27.6,27.6s27.6-13,27.6-27.6C54.1,26.5,53,26.5,53,26.5z"
                    />
                    <rect
                      x={17}
                      y="24.5"
                      fill="#AC44CF"
                      width={18}
                      height={9}
                    />
                  </g>
                </g>
                <g fill="#F5F5F5">
                  <path
                    id="svg-image"
                    d="M18.318 18.25 34.682 18.25C35.545 18.25 36.409 19.077 36.493 19.946L36.5 20.083 36.5 32.917C36.5 33.788 35.68 34.658 34.818 34.743L34.682 34.75 18.318 34.75C17.368 34.75 16.582 34.005 16.506 33.066L16.5 32.917 16.5 20.083C16.5 19.213 17.32 18.342 18.182 18.257L18.318 18.25 34.682 18.25ZM23.399 26.47 19.618 31.514C19.349 31.869 19.566 32.25 20.008 32.25L32.963 32.25C33.405 32.239 33.664 31.848 33.384 31.492L30.702 28.043C30.486 27.774 30.077 27.763 29.861 28.032L27.599 30.759 24.26 26.459C24.045 26.179 23.614 26.179 23.399 26.47ZM31.75 21.25C30.784 21.25 30 22.034 30 23 30 23.966 30.784 24.75 31.75 24.75 32.716 24.75 33.5 23.966 33.5 23 33.5 22.034 32.716 21.25 31.75 21.25Z"
                  />
                </g>
              </svg>
            </span>
          </button>
        </li>
        <li
          tabIndex={0}
          className="mt-2 relative opacity-1"
          data-animate-dropdown-item="true"
          data-testid="mi-attach-camera"
        >
          <button
            aria-label="Camera"
            className="_1CGek"
            data-animate-menu-icons-item="true"
            style={{
              opacity: 1,
              transform: "translateY(0%) scaleX(1) scaleY(1)",
            }}
          >
            <span
              data-testid="attach-camera"
              data-icon="attach-camera"
              className="_3fV_S"
            >
              <svg
                viewBox="0 0 53 53"
                height={53}
                width={53}
                preserveAspectRatio="xMidYMid meet"
                className=""
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 53 53"
                xmlSpace="preserve"
              >
                <g>
                  <defs>
                    <circle id="camera-SVGID_1_" cx="26.5" cy="26.5" r="25.5" />
                  </defs>
                  <clipPath id="camera-SVGID_2_">
                    <use xlinkHref="#camera-SVGID_1_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#camera-SVGID_2_)">
                    <path
                      fill="#D3396D"
                      d="M26.5-1.1C11.9-1.1-1.1,5.6-1.1,27.6h55.2C54,8.6,41.1-1.1,26.5-1.1z"
                    />
                    <path
                      fill="#EC407A"
                      d="M53,26.5H-1.1c0,14.6,13,27.6,27.6,27.6s27.6-13,27.6-27.6C54.1,26.5,53,26.5,53,26.5z"
                    />
                    <rect
                      x={17}
                      y="24.5"
                      fill="#D3396D"
                      width={15}
                      height={9}
                    />
                  </g>
                </g>
                <g fill="#F5F5F5">
                  <path
                    id="svg-camera"
                    d="M27.795 17C28.742 17 29.634 17.447 30.2 18.206L30.5 18.609C31.066 19.368 31.958 19.815 32.905 19.815L34.2 19.815C35.746 19.815 37 21.068 37 22.615L37 32C37 34.209 35.209 36 33 36L20 36C17.791 36 16 34.209 16 32L16 22.615C16 21.068 17.254 19.815 18.8 19.815L20.095 19.815C21.042 19.815 21.934 19.368 22.5 18.609L22.8 18.206C23.366 17.447 24.258 17 25.205 17L27.795 17ZM26.5 22.25C23.601 22.25 21.25 24.601 21.25 27.5 21.25 30.399 23.601 32.75 26.5 32.75 29.399 32.75 31.75 30.399 31.75 27.5 31.75 24.601 29.399 22.25 26.5 22.25ZM26.5 24C28.433 24 30 25.567 30 27.5 30 29.433 28.433 31 26.5 31 24.567 31 23 29.433 23 27.5 23 25.567 24.567 24 26.5 24Z"
                  />
                </g>
              </svg>
            </span>
          </button>
        </li>
        <li
          tabIndex={0}
          className="mt-2 relative opacity-1"
          data-animate-dropdown-item="true"
          data-testid="mi-attach-document"
        >
          <button
            aria-label="Document"
            className="_1CGek"
            data-animate-menu-icons-item="true"
            style={{
              opacity: 1,
              transform: "translateY(0%) scaleX(1) scaleY(1)",
            }}
          >
            <span
              data-testid="attach-document"
              data-icon="attach-document"
              className="_3fV_S"
            >
              <svg
                viewBox="0 0 53 53"
                height={53}
                width={53}
                preserveAspectRatio="xMidYMid meet"
                className=""
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 53 53"
                xmlSpace="preserve"
              >
                <g>
                  <defs>
                    <circle
                      id="document-SVGID_1_"
                      cx="26.5"
                      cy="26.5"
                      r="25.5"
                    />
                  </defs>
                  <clipPath id="document-SVGID_2_">
                    <use xlinkHref="#document-SVGID_1_" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#document-SVGID_2_)">
                    <path
                      fill="#5157AE"
                      d="M26.5-1.1C11.9-1.1-1.1,5.6-1.1,27.6h55.2C54,8.6,41.1-1.1,26.5-1.1z"
                    />
                    <path
                      fill="#5F66CD"
                      d="M53,26.5H-1.1c0,14.6,13,27.6,27.6,27.6s27.6-13,27.6-27.6C54.1,26.5,53,26.5,53,26.5z"
                    />
                  </g>
                </g>
                <g fill="#F5F5F5">
                  <path
                    id="svg-document"
                    d="M29.09 17.09c-.38-.38-.89-.59-1.42-.59H20.5c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H32.5c1.1 0 2-.9 2-2V23.33c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM27.5 22.5V18L33 23.5H28.5c-.55 0-1-.45-1-1z"
                  />
                </g>
              </svg>
            </span>
            <input
              accept="*"
              type="file"
              multiple=""
              style={{ display: "none" }}
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MediaOption;
