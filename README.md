# Buddy OnDemand - Jupyter

[![GitHub Release](https://img.shields.io/github/v/release/UCO-HPC/buddy_jupyter?style=flat-square)](https://github.com/UCO-HPC/buddy_jupyter/blob/devel/CHANGELOG.md)
[![GitHub License](https://img.shields.io/github/license/UCO-HPC/buddy_jupyter?style=flat-square)](https://opensource.org/licenses/MIT)

An app designed for UCO's OnDemand that launches an Jupyter Lab and Notebook.

## Prerequisites

The following should be made available on the compute nodes
- [JupyterLab] 1.2.5+
- [Ipython] 7.9.0+
- [Python] 3.5.4+
- [websockify] 0.6.0+

For additional support
- [Matplotlib] 3.1.1+
- [SciPy] 2019.10+

For module support:
- [Lmod] 8.1.0+

[JupyterLab]: https://www.jupyter.org
[IPython]: https://www.ipython.org/
[Python]: https://www.python.org/
[Matplotlib]: https://www.matplotlib.org
[SciPy]: https://www.scipy.org
[websockify]: https://github.com/novnc/websockify
[Lmod]: https://www.tacc.utexas.edu/research-development/tacc-projects/lmod

## Installation

You can either use the "New App" feature in the Open OnDemand development tab, or clone this app directly to the /var/www/ood/apps/sys folder. 

## Contributing

Please note that this application is specific to our university. Please feel free to copy and use as needed according to the associated license. IF you discover a big during use, please feel free to create a new branch and submit a pull request. 

## License

* Code, documentation, and content are licensed under MIT (see LICENSE.txt) at this time. License is subject to change without notice. 
* Jupyter and any and all Project Jupyter brand, products, services and feature names, logos and slogans are trademarks or registered trademarks of Jupyter or its subsidiaries located in the United States or other countries.
* OnDemand and it's source code are copyrighted by Ohio Supercomputer Center
