import { StatList } from "@/utilities/utiliti";

const Stats = async () => {
  const data = await StatList();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between space-x-1">
          <div className="mb-8 w-full md:w-1/5 text-center shadow-md py-8">
            <span className="mb-6 inline-block p-6 rounded bg-hero">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M24.25 12.9167C24.25 15.2639 22.3472 17.1667 20 17.1667V18.6667C23.1756 18.6667 25.75 16.0923 25.75 12.9167H24.25ZM20 17.1667C17.6528 17.1667 15.75 15.2639 15.75 12.9167H14.25C14.25 16.0923 16.8244 18.6667 20 18.6667V17.1667ZM15.75 12.9167C15.75 10.5694 17.6528 8.66666 20 8.66666V7.16666C16.8244 7.16666 14.25 9.74102 14.25 12.9167H15.75ZM20 8.66666C22.3472 8.66666 24.25 10.5694 24.25 12.9167H25.75C25.75 9.74102 23.1756 7.16666 20 7.16666V8.66666ZM15 23.6667H25V22.1667H15V23.6667ZM25 32.1667H15V33.6667H25V32.1667ZM15 32.1667C12.6528 32.1667 10.75 30.2639 10.75 27.9167H9.25C9.25 31.0923 11.8244 33.6667 15 33.6667V32.1667ZM29.25 27.9167C29.25 30.2639 27.3472 32.1667 25 32.1667V33.6667C28.1756 33.6667 30.75 31.0923 30.75 27.9167H29.25ZM25 23.6667C27.3472 23.6667 29.25 25.5694 29.25 27.9167H30.75C30.75 24.741 28.1756 22.1667 25 22.1667V23.6667ZM15 22.1667C11.8244 22.1667 9.25 24.741 9.25 27.9167H10.75C10.75 25.5694 12.6528 23.6667 15 23.6667V22.1667Z"
                  fill="#2D264B"
                />
                <path
                  d="M12.9202 17.3144C12.6573 16.8921 12.1641 16.6667 11.6667 16.6667C9.59559 16.6667 7.91666 14.9877 7.91666 12.9167C7.91666 10.8456 9.59559 9.16666 11.6667 9.16666C12.1641 9.16666 12.6573 8.9412 12.9202 8.5189C12.9319 8.50022 12.9435 8.4816 12.9553 8.46302C13.393 7.77217 13.1712 6.79399 12.3583 6.7045C12.1312 6.67949 11.9004 6.66666 11.6667 6.66666C8.21488 6.66666 5.41666 9.46488 5.41666 12.9167C5.41666 16.3684 8.21488 19.1667 11.6667 19.1667C11.9004 19.1667 12.1312 19.1538 12.3583 19.1288C13.1712 19.0393 13.393 18.0611 12.9553 17.3703C12.9436 17.3517 12.9319 17.3331 12.9202 17.3144Z"
                  fill="#2D264B"
                />
                <path
                  d="M7.84714 30.5281C7.65794 30.2125 7.32398 30 6.95597 30H6.66666C4.59559 30 2.91666 28.3211 2.91666 26.25C2.91666 24.1789 4.59559 22.5 6.66666 22.5H6.95597C7.32398 22.5 7.65794 22.2875 7.84714 21.9719C8.30897 21.2014 7.8078 20 6.90948 20H6.66666C3.21488 20 0.416656 22.7982 0.416656 26.25C0.416656 29.7018 3.21488 32.5 6.66666 32.5H6.90948C7.8078 32.5 8.30897 31.2986 7.84714 30.5281Z"
                  fill="#2D264B"
                />
                <path
                  d="M27.0447 17.3703C26.607 18.0611 26.8287 19.0393 27.6417 19.1288C27.8688 19.1538 28.0995 19.1667 28.3333 19.1667C31.7851 19.1667 34.5833 16.3684 34.5833 12.9167C34.5833 9.46488 31.7851 6.66666 28.3333 6.66666C28.0995 6.66666 27.8688 6.67949 27.6417 6.7045C26.8287 6.79399 26.607 7.77217 27.0447 8.46302C27.0564 8.48159 27.0681 8.50022 27.0798 8.5189C27.3426 8.9412 27.8359 9.16666 28.3333 9.16666C30.4044 9.16666 32.0833 10.8456 32.0833 12.9167C32.0833 14.9877 30.4044 16.6667 28.3333 16.6667C27.8359 16.6667 27.3426 16.8921 27.0798 17.3144C27.0681 17.3331 27.0564 17.3517 27.0447 17.3703Z"
                  fill="#2D264B"
                />
                <path
                  d="M32.1528 30.5281C31.691 31.2986 32.1922 32.5 33.0905 32.5H33.3333C36.7851 32.5 39.5833 29.7018 39.5833 26.25C39.5833 22.7982 36.7851 20 33.3333 20H33.0905C32.1922 20 31.691 21.2014 32.1528 21.9719C32.342 22.2875 32.676 22.5 33.044 22.5H33.3333C35.4044 22.5 37.0833 24.1789 37.0833 26.25C37.0833 28.3211 35.4044 30 33.3333 30H33.044C32.676 30 32.342 30.2125 32.1528 30.5281Z"
                  fill="#2D264B"
                />
              </svg>
            </span>
            <h3 className="text-2xl font-bold">{data.followers}</h3>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="mb-8 w-full md:w-1/5 text-center shadow-md py-8">
            <span className="mb-6 inline-block p-6 rounded bg-hero">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M5 16.6667C5 14.3655 6.86548 12.5 9.16667 12.5C11.4679 12.5 13.3333 14.3655 13.3333 16.6667V30C13.3333 32.3012 11.4679 34.1667 9.16667 34.1667C6.86548 34.1667 5 32.3012 5 30V16.6667Z"
                  stroke="#2D264B"
                  strokeWidth="1.5"
                />
                <path
                  d="M19.2924 7.81661L15.5748 13.8576C14.5767 15.4796 14.0776 16.2906 13.7758 17.1793C13.6838 17.4504 13.6058 17.726 13.5421 18.0051C13.3333 18.9202 13.3333 19.8724 13.3333 21.7768V27.5C13.3333 31.1819 16.3181 34.1667 20 34.1667H24.8497C28.0062 34.1667 30.8917 32.3833 32.3033 29.5601L34.2175 25.7317C36.1084 21.9498 33.3583 17.5 29.13 17.5H27.9804C25.0988 17.5 22.8952 14.9315 23.3333 12.0834L23.7384 9.45039C23.9636 7.9867 22.8311 6.66669 21.3502 6.66669C20.5111 6.66669 19.7321 7.10199 19.2924 7.81661Z"
                  stroke="#2D264B"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <h3 className="text-2xl font-bold">{data.solved}</h3>
            <p className="text-gray-500">Solved Problems</p>
          </div>
          <div className="mb-8 w-full md:w-1/5 text-center shadow-md py-8">
            <span className="mb-6 inline-block p-6 rounded bg-hero">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M11.6667 23.3333C12.7778 25.4762 16 28.3333 20 28.3333C24 28.3333 27.2223 25.4762 28.3334 23.3333M36.6667 20C36.6667 29.2047 29.2048 36.6666 20 36.6666C10.7953 36.6666 3.33337 29.2047 3.33337 20C3.33337 10.7952 10.7953 3.33331 20 3.33331C29.2048 3.33331 36.6667 10.7952 36.6667 20Z"
                  stroke="#2D264B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M16.6667 13.3333C16.6667 14.2538 15.9205 15 15 15C14.0796 15 13.3334 14.2538 13.3334 13.3333C13.3334 12.4128 14.0796 11.6666 15 11.6666C15.9205 11.6666 16.6667 12.4128 16.6667 13.3333Z"
                  fill="#2D264B"
                />
                <path
                  d="M26.6667 13.3333C26.6667 14.2538 25.9205 15 25 15C24.0796 15 23.3334 14.2538 23.3334 13.3333C23.3334 12.4128 24.0796 11.6666 25 11.6666C25.9205 11.6666 26.6667 12.4128 26.6667 13.3333Z"
                  fill="#2D264B"
                />
              </svg>
            </span>
            <h3 className="text-2xl font-bold">{data.customers}</h3>
            <p className="text-gray-500">Happy Customers</p>
          </div>
          <div className="mb-8 w-full md:w-1/5 text-center shadow-md py-8">
            <span className="mb-6 inline-block p-6 rounded bg-hero">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M5 26.6667H4.25H5ZM5.75 25C5.75 24.5858 5.41421 24.25 5 24.25C4.58579 24.25 4.25 24.5858 4.25 25H5.75ZM15 35.75C15.4142 35.75 15.75 35.4142 15.75 35C15.75 34.5858 15.4142 34.25 15 34.25V35.75ZM13.3333 35V34.25V35ZM15 5.75C15.4142 5.75 15.75 5.41421 15.75 5C15.75 4.58579 15.4142 4.25 15 4.25V5.75ZM4.25 15C4.25 15.4142 4.58579 15.75 5 15.75C5.41421 15.75 5.75 15.4142 5.75 15H4.25ZM35 13.3333H34.25H35ZM34.25 15C34.25 15.4142 34.5858 15.75 35 15.75C35.4142 15.75 35.75 15.4142 35.75 15H34.25ZM25 4.25C24.5858 4.25 24.25 4.58579 24.25 5C24.25 5.41421 24.5858 5.75 25 5.75V4.25ZM26.6667 5V4.25V5ZM26.6667 35V34.25V35ZM25 34.25C24.5858 34.25 24.25 34.5858 24.25 35C24.25 35.4142 24.5858 35.75 25 35.75V34.25ZM35.75 25C35.75 24.5858 35.4142 24.25 35 24.25C34.5858 24.25 34.25 24.5858 34.25 25H35.75ZM35 26.6667H35.75H35ZM5.75 26.6667L5.75 25H4.25L4.25 26.6667H5.75ZM15 34.25H13.3333V35.75H15V34.25ZM4.25 26.6667C4.25 31.6833 8.31675 35.75 13.3333 35.75V34.25C9.14518 34.25 5.75 30.8548 5.75 26.6667H4.25ZM13.3333 5.75H15V4.25H13.3333V5.75ZM5.75 15V13.3333H4.25V15H5.75ZM13.3333 4.25C8.31675 4.25 4.25 8.31675 4.25 13.3333H5.75C5.75 9.14517 9.14517 5.75 13.3333 5.75V4.25ZM34.25 13.3333V15H35.75V13.3333H34.25ZM25 5.75L26.6667 5.75V4.25L25 4.25V5.75ZM35.75 13.3333C35.75 8.31675 31.6833 4.25 26.6667 4.25V5.75C30.8548 5.75 34.25 9.14517 34.25 13.3333H35.75ZM26.6667 34.25H25V35.75H26.6667V34.25ZM34.25 25V26.6667H35.75V25H34.25ZM26.6667 35.75C31.6833 35.75 35.75 31.6833 35.75 26.6667H34.25C34.25 30.8548 30.8548 34.25 26.6667 34.25V35.75ZM13.3333 15.9167C12.5265 15.9167 11.9967 15.9151 11.6045 15.8623C11.2338 15.8125 11.1 15.7297 11.0185 15.6482L9.95783 16.7088C10.3645 17.1155 10.8676 17.2768 11.4046 17.349C11.9201 17.4183 12.5689 17.4167 13.3333 17.4167V15.9167ZM9.25 13.3333C9.25 14.0978 9.24841 14.7466 9.31771 15.2621C9.38991 15.7991 9.55117 16.3022 9.95783 16.7088L11.0185 15.6482C10.937 15.5667 10.8542 15.4329 10.8043 15.0622C10.7516 14.6699 10.75 14.1402 10.75 13.3333H9.25ZM15.9167 13.3333C15.9167 14.1402 15.9151 14.6699 15.8623 15.0622C15.8125 15.4329 15.7297 15.5667 15.6482 15.6482L16.7088 16.7088C17.1155 16.3022 17.2768 15.7991 17.349 15.2621C17.4183 14.7466 17.4167 14.0978 17.4167 13.3333H15.9167ZM13.3333 17.4167C14.0978 17.4167 14.7466 17.4183 15.2621 17.349C15.7991 17.2768 16.3022 17.1155 16.7088 16.7088L15.6482 15.6482C15.5667 15.7297 15.4329 15.8125 15.0622 15.8623C14.6699 15.9151 14.1402 15.9167 13.3333 15.9167V17.4167ZM13.3333 10.75C14.1402 10.75 14.6699 10.7516 15.0622 10.8043C15.4329 10.8542 15.5667 10.937 15.6482 11.0185L16.7088 9.95783C16.3022 9.55117 15.7991 9.38991 15.2621 9.31771C14.7466 9.24841 14.0978 9.25 13.3333 9.25V10.75ZM17.4167 13.3333C17.4167 12.5689 17.4183 11.9201 17.349 11.4046C17.2768 10.8676 17.1155 10.3645 16.7088 9.95783L15.6482 11.0185C15.7297 11.1 15.8125 11.2338 15.8623 11.6045C15.9151 11.9967 15.9167 12.5265 15.9167 13.3333H17.4167ZM13.3333 9.25C12.5689 9.25 11.9201 9.24841 11.4046 9.31771C10.8676 9.38991 10.3645 9.55117 9.95783 9.95783L11.0185 11.0185C11.1 10.937 11.2338 10.8542 11.6045 10.8043C11.9967 10.7516 12.5265 10.75 13.3333 10.75V9.25ZM10.75 13.3333C10.75 12.5265 10.7516 11.9967 10.8043 11.6045C10.8542 11.2338 10.937 11.1 11.0185 11.0185L9.95783 9.95783C9.55117 10.3645 9.38991 10.8676 9.31771 11.4046C9.24841 11.9201 9.25 12.5689 9.25 13.3333H10.75ZM13.3333 29.25C12.5265 29.25 11.9967 29.2484 11.6045 29.1957C11.2338 29.1458 11.1 29.063 11.0185 28.9815L9.95783 30.0422C10.3645 30.4488 10.8676 30.6101 11.4046 30.6823C11.9201 30.7516 12.5689 30.75 13.3333 30.75V29.25ZM9.25 26.6667C9.25 27.4311 9.24841 28.0799 9.31771 28.5954C9.38991 29.1324 9.55117 29.6355 9.95783 30.0422L11.0185 28.9815C10.937 28.9 10.8542 28.7662 10.8043 28.3955C10.7516 28.0033 10.75 27.4735 10.75 26.6667H9.25ZM15.9167 26.6667C15.9167 27.4735 15.9151 28.0033 15.8623 28.3955C15.8125 28.7662 15.7297 28.9 15.6482 28.9815L16.7088 30.0422C17.1155 29.6355 17.2768 29.1324 17.349 28.5954C17.4183 28.0799 17.4167 27.4311 17.4167 26.6667H15.9167ZM13.3333 30.75C14.0978 30.75 14.7466 30.7516 15.2621 30.6823C15.7991 30.6101 16.3022 30.4488 16.7088 30.0422L15.6482 28.9815C15.5667 29.063 15.4329 29.1458 15.0622 29.1957C14.6699 29.2484 14.1402 29.25 13.3333 29.25V30.75ZM13.3333 24.0833C14.1402 24.0833 14.6699 24.0849 15.0622 24.1377C15.4329 24.1875 15.5667 24.2703 15.6482 24.3518L16.7088 23.2912C16.3022 22.8845 15.7991 22.7232 15.2621 22.651C14.7466 22.5817 14.0978 22.5833 13.3333 22.5833V24.0833ZM17.4167 26.6667C17.4167 25.9022 17.4183 25.2534 17.349 24.7379C17.2768 24.2009 17.1155 23.6978 16.7088 23.2912L15.6482 24.3518C15.7297 24.4333 15.8125 24.5671 15.8623 24.9378C15.9151 25.3301 15.9167 25.8598 15.9167 26.6667H17.4167ZM13.3333 22.5833C12.5689 22.5833 11.9201 22.5817 11.4046 22.651C10.8676 22.7232 10.3645 22.8845 9.95783 23.2912L11.0185 24.3518C11.1 24.2703 11.2338 24.1875 11.6045 24.1377C11.9967 24.0849 12.5265 24.0833 13.3333 24.0833V22.5833ZM10.75 26.6667C10.75 25.8598 10.7516 25.3301 10.8043 24.9378C10.8542 24.5671 10.937 24.4333 11.0185 24.3518L9.95783 23.2912C9.55117 23.6978 9.38991 24.2009 9.31771 24.7379C9.24841 25.2534 9.25 25.9022 9.25 26.6667H10.75ZM26.6667 29.25C25.8598 29.25 25.3301 29.2484 24.9378 29.1957C24.5671 29.1458 24.4333 29.063 24.3518 28.9815L23.2912 30.0422C23.6978 30.4488 24.2009 30.6101 24.7379 30.6823C25.2534 30.7516 25.9022 30.75 26.6667 30.75V29.25ZM22.5833 26.6667C22.5833 27.4311 22.5817 28.0799 22.651 28.5954C22.7232 29.1324 22.8845 29.6355 23.2912 30.0422L24.3518 28.9815C24.2703 28.9 24.1875 28.7662 24.1377 28.3955C24.0849 28.0033 24.0833 27.4735 24.0833 26.6667H22.5833ZM29.25 26.6667C29.25 27.4735 29.2484 28.0033 29.1957 28.3955C29.1458 28.7662 29.063 28.9 28.9815 28.9815L30.0422 30.0422C30.4488 29.6355 30.6101 29.1324 30.6823 28.5954C30.7516 28.0799 30.75 27.4311 30.75 26.6667H29.25ZM26.6667 30.75C27.4311 30.75 28.0799 30.7516 28.5954 30.6823C29.1324 30.6101 29.6355 30.4488 30.0422 30.0422L28.9815 28.9815C28.9 29.063 28.7662 29.1458 28.3955 29.1957C28.0033 29.2484 27.4735 29.25 26.6667 29.25V30.75ZM26.6667 24.0833C27.4735 24.0833 28.0033 24.0849 28.3955 24.1377C28.7662 24.1875 28.9 24.2703 28.9815 24.3518L30.0422 23.2912C29.6355 22.8845 29.1324 22.7232 28.5954 22.651C28.0799 22.5817 27.4311 22.5833 26.6667 22.5833V24.0833ZM30.75 26.6667C30.75 25.9022 30.7516 25.2534 30.6823 24.7379C30.6101 24.2009 30.4488 23.6978 30.0422 23.2912L28.9815 24.3518C29.063 24.4333 29.1458 24.5671 29.1957 24.9378C29.2484 25.3301 29.25 25.8598 29.25 26.6667H30.75ZM26.6667 22.5833C25.9022 22.5833 25.2534 22.5817 24.7379 22.651C24.2009 22.7232 23.6978 22.8845 23.2912 23.2912L24.3518 24.3518C24.4333 24.2703 24.5671 24.1875 24.9378 24.1377C25.3301 24.0849 25.8598 24.0833 26.6667 24.0833V22.5833ZM24.0833 26.6667C24.0833 25.8598 24.0849 25.3301 24.1377 24.9378C24.1875 24.5671 24.2703 24.4333 24.3518 24.3518L23.2912 23.2912C22.8845 23.6978 22.7232 24.2009 22.651 24.7379C22.5817 25.2534 22.5833 25.9022 22.5833 26.6667H24.0833Z"
                  fill="#2D264B"
                />
              </svg>
            </span>
            <h3 className="text-2xl font-bold">{data.projects}</h3>
            <p className="text-gray-500">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;
