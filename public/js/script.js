const allMenuDropdown = document.querySelectorAll('.dropdown-menu');
const toggleSidebar = document.querySelector('#toggle-sidebar');
const sidebar = document.querySelector('#sidebar');
const allDivider = document.querySelectorAll('.divider');




allMenuDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('link-active')) {
			allMenuDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');
				aLink.classList.remove('link-active');
				i.classList.remove('dropdown-show');
			});
		}

		allDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})

		this.classList.toggle('link-active');
		item.classList.toggle('dropdown-show');
	})
})



if(sidebar.classList.contains('side-collapse')) {
	allDivider.forEach(item=> {
		item.textContent = '-';
	})
} else {
	allDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}



toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('side-collapse');

	allMenuDropdown.forEach(i=> {
		const aLink = i.parentElement.querySelector('a:first-child');
		aLink.classList.remove('link-active');
		i.classList.remove('dropdown-show');
	});

	if(sidebar.classList.contains('side-collapse')) {
		allDivider.forEach(item=> {
			item.textContent = '-';
		})
	} else {
		allDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})



sidebar.addEventListener('mouseenter', function () {
	if(this.classList.contains('side-collapse')) {
		allDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})



sidebar.addEventListener('mouseleave', function () {
	if(this.classList.contains('side-collapse')) {
		allDivider.forEach(item=> {
			item.textContent = '-';
		})

		allMenuDropdown.forEach(i=> {
			const aLink = i.parentElement.querySelector('a:first-child');
			aLink.classList.remove('link-active');
			i.classList.remove('dropdown-show');
		});
	}
})



// PROFILE
const profile = document.getElementById('img-profile');
const dropdownProfile = profile.parentElement.querySelector('ul');

profile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('profile-show');
})





window.addEventListener('click', function (e) {
	if(e.target !== profile && e.target !== dropdownProfile) {
		if(dropdownProfile.classList.contains('profile-show')) {
			dropdownProfile.classList.remove('profile-show')
		}
	}
})





// APEXCHART
var options = {
  series: [44, 55, 13, 33],
  chart: {
  width: 380,
  type: 'donut',
},
dataLabels: {
  enabled: false
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      show: false
    }
  }
}],
legend: {
  position: 'right',
  offsetY: 0,
  height: 230,
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();